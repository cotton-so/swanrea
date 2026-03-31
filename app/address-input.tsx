"use client";

import { useState, useRef, useEffect } from "react";

interface Address {
  street_number: string;
  street: string;
  locality: string;
  city: string;
  region: string;
  postcode: string;
  formatted: string;
}

export default function AddressInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Address[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(value: string) {
    setQuery(value);
    setSelected(false);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (value.length < 3) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/address?q=${encodeURIComponent(value)}`);
        const data: Address[] = await res.json();
        setResults(data);
        setIsOpen(data.length > 0);
      } catch {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);
  }

  function handleSelect(address: Address) {
    setQuery(address.formatted);
    setSelected(true);
    setIsOpen(false);
    setResults([]);
  }

  return (
    <div ref={wrapperRef} className="relative">
      <label
        htmlFor="address"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Address / Suburb *
      </label>
      <input
        type="text"
        id="address"
        name="address"
        required
        autoComplete="off"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => results.length > 0 && !selected && setIsOpen(true)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
        placeholder="Start typing your address..."
      />
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map((address, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => handleSelect(address)}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition border-b border-gray-50 last:border-0"
              >
                {address.formatted}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
