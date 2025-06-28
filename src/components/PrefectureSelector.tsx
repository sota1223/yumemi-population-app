// src/components/PrefectureSelector.tsx
import React, { useEffect, useState } from 'react';
import { fetchPrefectures } from '../lib/api';

type Prefecture = {
  prefCode: number;
  prefName: string;
};

export default function PrefectureSelector() {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefs, setSelectedPrefs] = useState<number[]>([]);

  useEffect(() => {
    fetchPrefectures()
      .then(data => setPrefectures(data.prefectures))
      .catch(console.error);
  }, []);

  const togglePref = (code: number) => {
    setSelectedPrefs(prev =>
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  return (
    <div>
      <h2>都道府県一覧</h2>
      {prefectures.map(pref => (
        <label key={pref.prefCode} style={{ display: 'block', margin: '4px 0' }}>
          <input
            type="checkbox"
            checked={selectedPrefs.includes(pref.prefCode)}
            onChange={() => togglePref(pref.prefCode)}
          />
          {pref.prefName}
        </label>
      ))}
    </div>
  );
}
