# practice_dndkit ✅

**簡介**

這是一個使用 React + TypeScript 的範例專案，用來練習 `@dnd-kit` 的拖放功能與 `react-router` 的路由整合。專案同時採用 Vite 開發環境與 Tailwind CSS 配置。

---

## 功能亮點 ✨

- 使用 `@dnd-kit/core`、`@dnd-kit/sortable` 等實作拖放/排序功能
- 範例頁面包含 `Draggable` / `Droppable` 的基本示範
- 具有商品/購物車相關元件（`cartKit.tsx`）與範例路由
- 使用 `react-router` 的 server-side build / dev 腳本（見 `package.json`）

---

## 快速開始 ⚡

先安裝相依套件：

```bash
npm install
```

開發模式（啟動本地開發伺服器）：

```bash
npm run dev
```

建置：

```bash
npm run build
```

啟動（執行已建置的 server）：

```bash
npm start
```

其他工具：

```bash
npm run typecheck
```

---

## 專案結構 🔧

- `app/` - 應用程式入口與路由配置
  - `components/` - 可重用 UI 元件（例如 `itemList.tsx`）
  - `product/` - 商品相關頁面與 `cartKit.tsx`
  - `welcome/` - 拖放範例元件（`Draggable.tsx`, `Droppable.tsx`）
- `public/` - 靜態資源
- `vite.config.ts`, `tsconfig.json` - 建置與 TypeScript 設定
- `Dockerfile` - （選用）容器化配置

---

## 開發提示 💡

- 範例拖拉檔案位置：`app/welcome/`（可直接閱讀 `Draggable.tsx` 與 `Droppable.tsx`）
- 若要新增頁面，請參考 `app/routes.ts` 與 `react-router.config.ts`
- 專案使用 TypeScript，如需更嚴格型別檢查，請執行 `npm run typecheck`

---