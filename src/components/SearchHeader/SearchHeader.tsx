import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="blind">검색</legend>
          <input
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          />
          <button>Search</button>
        </fieldset>
      </form>
    </header>
  );
}
