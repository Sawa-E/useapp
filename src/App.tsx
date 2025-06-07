import { useState } from 'react';
import { LINKS } from './data/links';
import type { LinkItem } from './data/links';
import './App.css';
import SearchAppBar from './components/layout/AppBar';
import AppIcon from './components/layout/AppIcon';

function App() {
  // ここでキーワードを管理する
  const [keyword, setKeyword] = useState<string>('');

  // フィルタ後のリンク一覧
  const filteredLinks: LinkItem[] = LINKS.filter((link) =>
    link.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <>
      {/* 1. ヘッダーに keyword と setKeyword を渡す */}
      <SearchAppBar keyword={keyword} onChangeKeyword={setKeyword} />

      {/* 2. 本体コンテンツ */}
      <div className='icon-grid'>
        {filteredLinks.map((link) => (
          <AppIcon
            key={link.id}
            title={link.title}
            url={link.url}
            iconUrl={link.iconUrl}
            maxWidth={180}
            mediaHeight={120}
            mediaWidth='100%'
          />
        ))}
      </div>

    </>
  );
}

export default App;
