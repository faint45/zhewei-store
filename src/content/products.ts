export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  useCases: string[];
  apis: { method: string; path: string; desc: string }[];
  comingSoonPrice?: string;
}

export const products: Product[] = [
  {
    id: "doc-ai",
    name: "文件智能 DocAI",
    tagline: "300 頁招標文件 → 5 分鐘結構化摘要",
    description:
      "上傳 PDF 設計圖或規範書，AI 自動辨識圖面尺寸、材料規格、工項數量。實測處理 300 頁招標文件只需 5 分鐘，準確率 94%。",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "from-blue-500 to-cyan-400",
    features: [
      "PDF / 圖片自動辨識與結構化",
      "批次文件處理（多檔同時解析）",
      "自動分類文件類型（設計圖/規範/照片）",
      "擷取關鍵數據（尺寸/材料/規格）",
      "支援繁體中文 OCR",
    ],
    useCases: [
      "標案文件快速摘要 — 數百頁招標文件 5 分鐘內產出重點",
      "圖紙比對 — 新舊版本差異自動標注",
      "估算前置 — 從圖面擷取工項與數量",
    ],
    apis: [
      { method: "POST", path: "/api/v1/doc/parse", desc: "解析單一 PDF 或圖片" },
      { method: "POST", path: "/api/v1/doc/parse/batch", desc: "批次文件解析" },
    ],
    comingSoonPrice: "NT$ 3,000/月起",
  },
  {
    id: "site-ai",
    name: "工地智眼 SiteAI",
    tagline: "LINE 傳照片 → AI 自動寫日報",
    description:
      "工地主任用 LINE 傳一張照片，AI 在 3 秒內辨識施工進度與安全缺失，自動歸檔並於 17:30 推播完整日報給業主。每天省 2 小時文書作業。",
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
    color: "from-green-500 to-emerald-400",
    features: [
      "照片 AI 分析（施工進度/缺失/安全）",
      "語音轉文字 + 智慧歸檔",
      "手動文字記錄結構化",
      "自動日報生成（進度/安全/風險/建議）",
      "歷史紀錄查詢與統計",
    ],
    useCases: [
      "工地主任現場拍照 → LINE 傳送 → 自動歸檔+分析",
      "每日 17:30 自動產生施工日報送業主",
      "安衛人員語音回報 → 系統自動建立待辦事項",
    ],
    apis: [
      { method: "POST", path: "/api/v1/site/photo", desc: "照片分析" },
      { method: "POST", path: "/api/v1/site/voice", desc: "語音轉結構化記錄" },
      { method: "POST", path: "/api/v1/site/text", desc: "文字記錄結構化" },
      { method: "POST", path: "/api/v1/site/daily-report", desc: "自動日報生成" },
      { method: "GET", path: "/api/v1/site/records/{id}", desc: "查詢歷史記錄" },
    ],
    comingSoonPrice: "NT$ 5,000/月起",
  },
  {
    id: "plan-ai",
    name: "排程成本 PlanAI",
    tagline: "輸入專案描述 → 10 分鐘完整報價書",
    description:
      "輸入「台北市 8 層 RC 住宅」，AI 自動產出 480 天 CPM 排程、1.86 億成本估算、Monte Carlo P50/P75/P90 風險區間。投標前 10 分鐘搞定。",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    color: "from-orange-500 to-amber-400",
    features: [
      "AI 排程生成 + CPM 要徑分析",
      "5D 成本估算（材料/人工/機具/發包/管理費）",
      "Monte Carlo 模擬（P50/P75/P90 信心區間）",
      "風險熱圖 + 價值工程建議",
      "計劃 vs 實際進度比對",
      "台灣營建單價資料庫",
    ],
    useCases: [
      "投標前 → 輸入專案描述 → 10 分鐘產出完整報價書",
      "專案進行中 → 實際進度與計劃比對 → 預警延誤風險",
      "變更設計 → 即時評估成本影響 + 工期影響",
    ],
    apis: [
      { method: "POST", path: "/api/v1/schedule/generate", desc: "AI 排程生成" },
      { method: "POST", path: "/api/v1/schedule/cpm", desc: "CPM 要徑計算" },
      { method: "POST", path: "/api/v1/schedule/compare", desc: "計劃 vs 實際比對" },
      { method: "POST", path: "/api/v1/cost/estimate", desc: "5D 成本估算" },
      { method: "POST", path: "/api/v1/cost/change-impact", desc: "變更影響評估" },
      { method: "GET", path: "/api/v1/cost/unit-costs", desc: "台灣單價資料庫" },
      { method: "POST", path: "/api/v1/bid/simulate", desc: "投標模擬" },
    ],
    comingSoonPrice: "NT$ 8,000/月起",
  },
  {
    id: "safe-ai",
    name: "安全守護 SafeAI",
    tagline: "拍照 3 秒 → 24 項檢查表自動填寫",
    description:
      "安衛人員現場拍一張照片，AI 在 3 秒內辨識高空作業、開口防護、電氣安全等 24 項檢查項目，自動填入標準檢查表。合規率從人工 78% 提升至 96%。",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "from-red-500 to-rose-400",
    features: [
      "照片 → 自動填寫安全檢查表",
      "安全缺失 AI 辨識（高空/電氣/開口/支撐）",
      "風險等級自動分類（低/中/高/嚴重）",
      "信心度標示 + 人工確認機制",
      "缺失追蹤與改善紀錄",
    ],
    useCases: [
      "每日巡檢 → 拍照上傳 → 檢查表自動產出",
      "職安法規合規 → 確保每日檢查不遺漏",
      "勞檢準備 → 完整的電子化安全紀錄",
    ],
    apis: [
      { method: "POST", path: "/api/v1/checklist/auto-fill", desc: "照片自動填寫安全檢查表" },
    ],
    comingSoonPrice: "NT$ 2,000/月起",
  },
  {
    id: "vr-trainer",
    name: "機具VR訓練師",
    tagline: "AI 教練 + WebXR 沉浸式操作訓練",
    description:
      "營建機具（挖土機、塔吊、汽車吊）虛擬實境操作訓練。AI 即時教練糾正操作、評分、語音指導。支援手機/電腦/Quest 頭顯。",
    icon: "M20.5 6h-17A1.5 1.5 0 002 7.5v9A1.5 1.5 0 003.5 18h4.22a1.5 1.5 0 001.34-.83L10.5 14h3l1.44 3.17a1.5 1.5 0 001.34.83h4.22a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0020.5 6zM8 13a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z",
    color: "from-purple-500 to-violet-400",
    features: [
      "WebXR 沉浸式 VR 操作訓練",
      "AI 即時教練（語音+文字糾正）",
      "操作評分系統（角度/深度/安全距離）",
      "3 種訓練關卡（基本/挖掘/安全）",
      "3D 互動零件拆解學習",
      "操作紀錄 + 學習路徑追蹤",
    ],
    useCases: [
      "新手操作員入職前 VR 模擬訓練，降低實機練習風險",
      "考照前模擬練習 → AI 評分確認操作水準",
      "定期回訓 → 維持操作技能，記錄訓練紀錄",
    ],
    apis: [
      { method: "POST", path: "/api/v1/commander/command", desc: "AI 教練即時回饋（hazard_type: vr_excavator）" },
    ],
    comingSoonPrice: "NT$ 6,000/月起",
  },
  {
    id: "commander",
    name: "AI 監理指揮官",
    tagline: "5-Agent 並行決策 + 資料飛輪閉環",
    description:
      "Multi-Agent 施工監理指揮系統。RFID 物料管控、車輛保養預測、LiDAR/CCTV 即時比對、施工圖偏差偵測、AI 自動派工。5 個 Agent 並行分析，brain-v5 最終裁決。",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    color: "from-indigo-500 to-blue-400",
    features: [
      "RFID 物料管控（GPS + Vision AI 交叉驗證）",
      "車輛保養預測（里程/時數 + RAG 故障模式）",
      "LiDAR/CCTV 即時比對（ICP 點雲配準 + DTwin）",
      "施工圖 vs 實際比對（尺寸/材料偏差偵測）",
      "5-Agent 並行決策（Vision/Weather/Structural/Action/Supervisor）",
      "資料飛輪閉環（預測 vs 實際 → 模型自我進化）",
    ],
    useCases: [
      "RFID 掃描 → AI 偵測物料異常 → LINE 即時通報",
      "LiDAR 掃描 → 與 DTwin 模型比對 → 偏差 > 5cm 自動警報",
      "每日晨會 → Commander 自動產出今日風險報告 + 派工建議",
    ],
    apis: [
      { method: "POST", path: "/api/v1/rfid/check", desc: "RFID 物料異常檢測" },
      { method: "POST", path: "/api/v1/maintenance/check", desc: "車輛保養風險預測" },
      { method: "POST", path: "/api/v1/lidar/compare", desc: "LiDAR/CCTV 即時比對" },
      { method: "POST", path: "/api/v1/drawing/compare", desc: "施工圖偏差偵測" },
      { method: "POST", path: "/api/v1/commander/decide", desc: "5-Agent 全局決策" },
      { method: "POST", path: "/api/v1/flywheel/hot_swap", desc: "觸發模型自我進化" },
    ],
    comingSoonPrice: "NT$ 15,000/月起",
  },
  {
    id: "disaster-ai",
    name: "防災 AI",
    tagline: "颱風水災預測 + 地震即時警報",
    description:
      "接入中央氣象署即時資料，結合 RAG 歷史災害分析，AI 預測工地水災/颱風風險並自動推播警報。地震發生時即時通知停工撤離。",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "from-yellow-500 to-red-400",
    features: [
      "中央氣象署 API 即時接入",
      "颱風路徑追蹤 + 工地距離計算",
      "降雨機率 → 水災風險分數",
      "地震 P 波即時偵測",
      "LINE 自動推播停工/撤離指令",
      "RAG 歷史災害模式比對",
    ],
    useCases: [
      "颱風來襲前 48hr → AI 評估各工地風險等級 → 自動發佈防颱指令",
      "暴雨警報 → AI 判斷開挖面覆蓋、擋土支撐加強、排水啟動",
      "地震 > 4 級 → 自動停工通知 → 結構安全巡檢派工",
    ],
    apis: [
      { method: "POST", path: "/api/v1/disaster/flood/predict", desc: "水災風險預測" },
      { method: "POST", path: "/api/v1/disaster/typhoon/track", desc: "颱風追蹤" },
      { method: "GET", path: "/api/v1/earthquake/recent", desc: "最近地震資訊" },
    ],
    comingSoonPrice: "NT$ 5,000/月起",
  },
];
