export async function fetchPrefectures() {
  const response = await fetch('https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1/prefectures');
  if (!response.ok) {
    throw new Error('都道府県一覧の取得に失敗しました');
  }
  const data = await response.json();
  return data; // data.prefectures に配列が入ってる想定
}
