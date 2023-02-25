// 主文件和app有关的写在app.tsx里，index.css→main.tsx
// tsx和d.ts文件区别：tsx写react component，d.ts写一般的ts
// npm run dev 运行vite项目 http://localhost:5173/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
