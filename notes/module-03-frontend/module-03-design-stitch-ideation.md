# Cách xây dựng design stitch khi không có ý tưởng

Ví dụ ta muốn làm một website chấm code tự động có tích hợp thêm chatbot RAG, ta cần trình bày được những thông tin sau:

- Tên thương hiệu: Ví dụ DMOJ.
- Màu sắc chủ đạo: #0077b6.
- Đối tượng người sử dụng: Sinh viên ngành công nghệ thông tin, có nhu cầu sử dụng để nâng cao kỹ năng viết code, đồng thời muốn biết được code của mình viết như vậy có chính xác hay không.
- Phong cách UI: Geek Minimalist
- Thể loại: Online Judge chấm code tự động có tích hợp chatbot RAG.

Sau đó, ta sẽ nhờ AI sinh cho một prompt chi tiết cho tất cả các page của website với các tiêu chí trên, nhờ AI mô tả chi tiết để Stitch thiết kế giao diện.

Prompt sinh ra có mẫu như sau:

**Design System Chung (áp dụng cho toàn bộ trang)**

```
Design System — DMOJ Online Judge

Brand: DMOJ
Primary color: #0077b6 (Ocean Blue)
Accent: #00b4d8 (Cyan highlight), #90e0ef (subtle glow)
Background: #0a0e14 (near-black, dark navy)
Surface: #111827 (card/panel background)
Border: #1e2d3d (subtle divider)
Text primary: #e8f4f8
Text secondary: #7a9bb5
Success: #22c55e | Error: #ef4444 | Warning: #f59e0b

Typography:
  - Display/Heading: "JetBrains Mono" (monospace, geek identity)
  - Body: "IBM Plex Sans" (clean, technical)
  - Code blocks: "Fira Code" with ligatures enabled

Style philosophy: Geek Minimalist — sparse layouts, terminal aesthetics,
no decoration for decoration's sake. Every pixel earns its place.
Monospace headers, sharp edges, no border-radius > 6px,
subtle scanline or grid-dot texture on backgrounds.

UI Motifs:
  - Thin 1px borders in #1e2d3d
  - Bracket notation for labels: [ACCEPTED], [RUNTIME ERROR]
  - Blinking cursor █ on active inputs
  - Subtle blue glow (box-shadow: 0 0 12px #0077b640) on focus states
  - Status badges styled like terminal output
```

**Homepage**

```
Thiết kế trang Landing Page cho DMOJ Online Judge.

Layout: Full-width dark page. Không dùng hero image. Thay vào đó dùng
một ASCII-art logo "DMOJ" lớn ở góc trên trái, render bằng monospace font.

Hero Section:
  - Tagline chính (display, 48px, JetBrains Mono, màu #e8f4f8):
    "Write code. Judge instantly."
  - Sub-tagline (IBM Plex Sans, 16px, #7a9bb5):
    "An algorithmic judge for the serious programmer."
  - Hai nút CTA:
    → [  Start Solving  ] — filled, bg #0077b6, text trắng
    → [  View Problems  ] — outlined, border #0077b6, text #0077b6
  - Phía sau hero: lưới chấm mờ (dot grid pattern) màu #1e2d3d
    trên nền #0a0e14, tạo cảm giác graph paper

Stats Bar (ngang, 4 cột):
  - 2,400+ Problems | 18,000+ Users | 5M+ Submissions | 99.9% Uptime
  - Mỗi số lớn, bold, màu #00b4d8; label nhỏ, #7a9bb5

Feature Cards (3 cards, grid):
  Card 1 — Auto Judge
    Icon: terminal prompt ">"
    Title: "Millisecond Verdicts"
    Desc: "Submit your code and get a verdict in under a second."
  Card 2 — AI Chatbot RAG
    Icon: dấu "?" trong ngoặc vuông [?]
    Title: "Ask the AI Judge"
    Desc: "Stuck? Our RAG-powered assistant explains your errors using
    your own code as context."
  Card 3 — Leaderboard
    Icon: "#1"
    Title: "Compete & Rank"
    Desc: "Weekly contests, rating system, and global rankings."

  Card style: bg #111827, border 1px #1e2d3d, no shadow,
  hover: border-color chuyển sang #0077b6, subtle glow

Recent Activity Feed (bottom section):
  Dạng terminal log — scrollable, monospace:
  > user_482 solved "Fibonacci Sequence" in 12ms [ACCEPTED]
  > user_191 submitted "Graph BFS" — [WRONG ANSWER] on case 4
  > contest "Weekly #23" starts in 02:14:38
  Chữ xanh lá cho ACCEPTED, đỏ cho WRONG ANSWER, vàng cho countdown
```

**Problem List Page**

```
Thiết kế trang danh sách bài tập (Problem List) cho DMOJ.

Layout: 2 cột — sidebar lọc bên trái (240px), danh sách bài bên phải.

Sidebar Filter:
  - Tiêu đề: "// FILTER" (monospace, uppercase, #7a9bb5)
  - Các nhóm lọc:
    → Difficulty: [Easy] [Medium] [Hard] [Expert] — toggle buttons
    → Tags: checkbox list (Dynamic Programming, Graph, Greedy, String,
      Tree, Math, Brute Force...) — tối đa 8 tags hiển thị, có "show more"
    → Status: [All] [Solved] [Attempted] [Unsolved]
    → Language: dropdown (C++, Python, Java, Kotlin...)
  - Nút "Reset Filters" — ghost button, nhỏ, dưới cùng

Search Bar (full width, trên bảng):
  - Placeholder: "_ search problems..." (có blinking cursor)
  - Icon kính lúp nhỏ bên trái, monospace font

Problem Table:
  Columns: # | Title | Difficulty | Tags | AC Rate | My Status

  Row style:
  - Alternating bg: #0a0e14 và #111827
  - Difficulty badge:
    Easy = #22c55e text, Easy = [easy]
    Medium = #f59e0b text, [med]
    Hard = #ef4444 text, [hard]
    Expert = #a855f7 text, [ex]
  - Tags: nhỏ, outlined pill, #1e2d3d border
  - Status icon: ✓ xanh (solved), ○ vàng (attempted), — (untouched)
  - Hover row: bg chuyển #1e2d3d, cursor pointer
  - Click row: navigate đến Problem Detail page

Pagination: minimal — "< prev  |  page 3 of 47  |  next >" monospace
```

**Problem Detail & Code Submission Page**

```
Thiết kế trang chi tiết bài tập và nộp code — đây là trang QUAN TRỌNG NHẤT.

Layout: 2 cột split-pane (resizable):
  - Trái (45%): Problem Statement Panel
  - Phải (55%): Code Editor + Submit Panel

LEFT PANEL — Problem Statement:
  Header:
    - Problem ID: "P-1042" (monospace, nhỏ, #7a9bb5)
    - Problem Title: "Shortest Path in Weighted Graph" (lớn, JetBrains Mono)
    - Badges ngang: [Hard] [Graph] [Dijkstra] [Contest: Weekly #23]
    - Stats nhỏ: "AC Rate: 34.2% | 1,204 submissions | Time: 1s | Mem: 256MB"

  Nội dung (scrollable, IBM Plex Sans):
    - Section "Problem Statement" — văn bản mô tả bài toán
    - Section "Input Format" — monospace block
    - Section "Output Format" — monospace block
    - Section "Sample Cases":
      Mỗi test case: 2 cột [Input] | [Output], dạng terminal box
      Copy button nhỏ ở góc mỗi box
    - Section "Constraints":
      Dạng list: 1 ≤ N ≤ 10^5, etc.
    - Section "Notes" (optional)

  Bottom of left panel:
    Nút [?  Ask AI] — icon bot, nền #0077b6, mở chatbot panel

RIGHT PANEL — Code Editor:
  Top bar:
    - Language selector dropdown: "C++ 17 ▼"
    - Theme toggle (dark only cho geek style)
    - Nút: [Reset] [Copy] [Fullscreen]

  Editor area:
    - Monaco Editor hoặc CodeMirror style
    - Syntax highlighting đúng ngôn ngữ
    - Line numbers, current line highlight nhẹ
    - Nền #0d1117 (slightly darker than surface)

  Below editor:
    - "Custom Test" toggle — cho phép nhập input tay để test
    - Nút chính: [  ▶  Submit  ] — lớn, full width, bg #0077b6
    - Nút phụ: [  Run Sample Tests  ] — outlined

  Submission Result (hiện ngay dưới nút Submit, không redirect):
    States:
    → Judging: spinner + "Judging... case 3/10" progress bar
    → ACCEPTED:
      Box xanh lá, "[✓ ACCEPTED]", "Runtime: 48ms | Memory: 12.4MB"
    → WRONG ANSWER:
      Box đỏ, "[✗ WRONG ANSWER]", "Failed on case 4 of 10"
      Show diff: Expected vs Got (2 cột terminal)
    → TIME LIMIT EXCEEDED:
      Box vàng, "[⚠ TLE]", "Exceeded 1000ms on case 7"
    → RUNTIME ERROR:
      Box đỏ tối, "[✗ RE]", error message truncated

CHATBOT PANEL (slide in từ phải hoặc bottom drawer):
  Header: "[ DMOJ AI ]  — RAG Assistant"
  Context badge: "Context: P-1042 + Your Last Submission"
  Chat area: bubble style, AI bubble nền #111827, user bubble #0077b6
  Input: "Ask about your code..." + [Send] nút
  Suggested prompts:
    → "Why did my solution get WA?"
    → "Explain Dijkstra's algorithm"
    → "Optimize my current code"
```

**Submission History Page**

```
Thiết kế trang lịch sử nộp bài (Submission History).

Layout: Single column, full width với max-width 960px, centered.

Page Header:
  - "// submission_history" (monospace, lớn, như terminal command)
  - Filter bar: [All] [Accepted] [Wrong Answer] [TLE] [RE] + date range picker

Submission Table:
  Columns: ID | Time | Problem | Language | Verdict | Runtime | Memory | Action

  Row data example:
  #58291 | 2 min ago | P-1042 Shortest Path | C++17 | [ACCEPTED] | 48ms | 12MB | [View]
  #58289 | 15 min ago | P-0391 Fibonacci | Python | [WRONG ANSWER] | — | — | [View]

  Verdict styling (monospace badges):
  - ACCEPTED: text #22c55e, bracket style
  - WRONG ANSWER: text #ef4444
  - TLE: text #f59e0b
  - RE: text #f97316
  - CE (Compile Error): text #a855f7

  Click [View] → mở modal hiện full source code + verdict chi tiết

Code View Modal:
  - Header: "Submission #58291 — [ACCEPTED]"
  - Code block với syntax highlight
  - Test case results: list từng case: ✓ case 1 | ✓ case 2 | ✗ case 4 (WA)
  - Nút: [Resubmit] [Copy Code]
```

**Contest Page**

```
Thiết kế trang Contest cho DMOJ.

Contest List View:
  Header: "// contests"
  3 tabs: [  Ongoing  ] [  Upcoming  ] [  Past  ]

  Contest Card (full width, stacked):
    - Tên contest: "Weekly Algorithm Contest #24" (lớn, monospace)
    - Trạng thái badge: [LIVE] nhấp nháy đỏ / [in 2d 14h] / [ENDED]
    - Thông tin: Duration: 3h | Problems: 6 | Participants: 482
    - Progress bar thời gian (nếu đang diễn ra): thanh ngang #0077b6
    - Nút: [  Join Contest  ] hoặc [  View Results  ]

Contest Detail / Arena View:
  Khi đang trong contest — layout đặc biệt:

  Top bar (sticky):
    - Logo DMOJ nhỏ trái
    - Tên contest giữa
    - Countdown timer phải: "01:24:38" — monospace, lớn, đổi màu đỏ khi < 10 phút

  Main area: 2 cột
    Trái: Problem list của contest
      P1 | Two Sum | [●●○○○] khó dễ indicator | ✓ Solved
      P2 | Graph BFS | [●●●○○] | ○ Attempted
      ...

    Phải: Scoreboard mini (top 10)
      Rank | Username | Score | Penalty
      Highlight hàng của user hiện tại

  Click vào problem → mở Problem Detail (như Page 3) nhưng trong contest context
```

**Leaderboard / Rankings Page**

```
Thiết kế trang Bảng xếp hạng toàn cầu.

Header: "// global_rankings" + subtitle "Updated every 5 minutes"

Filter: [All Time] [This Month] [This Week] — tab selector

Leaderboard Table:
  Columns: Rank | User | Rating | Problems Solved | Contests | Country

  Top 3 rows đặc biệt:
    #1 — nền gradient #0077b620, rank số lớn hơn, badge [GRANDMASTER]
    #2 — subtle highlight
    #3 — subtle highlight

  Rating badge system (thay thế level):
    2800+ → [GRANDMASTER] màu đỏ
    2400+ → [MASTER] màu cam
    2000+ → [EXPERT] màu tím
    1600+ → [SPECIALIST] màu xanh lam
    1200+ → [APPRENTICE] màu xám xanh

  User row:
    Avatar nhỏ 24px + username (monospace) + rating số + trend arrow ↑↓

  "My Rank" shortcut: sticky bottom bar
    "You are ranked #1,204 — Rating: 1,847 [SPECIALIST]"
    Nút: [View My Profile]
```

**User Profile Page**

```
Thiết kế trang hồ sơ người dùng.

Layout: 2 cột — left sidebar info (280px) + right main content

LEFT SIDEBAR:
  - Avatar lớn (có thể upload), viền #0077b6
  - Username lớn (monospace): "user_482"
  - Rating badge: [SPECIALIST — 1847]
  - Join date: "member since 2023-09-14"
  - Country flag + country
  - Stats block:
    Problems Solved: 342
    Contests: 28
    Best Rank: #84
    Submissions: 1,204
  - Social links (GitHub, etc.) — icon only

RIGHT MAIN:
  Tab bar: [Overview] [Submissions] [Contests] [Solutions]

  OVERVIEW TAB:
    Heatmap (như GitHub contribution graph):
      "Submission Activity — Last 365 Days"
      Grid ô vuông nhỏ, màu từ #1e2d3d (0) → #0077b6 (nhiều)

    Problem Difficulty Breakdown:
      Horizontal bar chart: Easy 142 | Medium 156 | Hard 38 | Expert 6
      Bars màu #0077b6 với width tỉ lệ

    Tag Mastery:
      Radar/spider chart nhỏ hoặc list tags với progress bar
      DP: ████████░░ 80% | Graph: ██████░░░░ 60% | etc.

    Recent Accepted Solutions (5 bài mới nhất):
      List nhỏ, monospace, kèm thời gian và runtime

  SUBMISSIONS TAB: (giống Page 4 nhưng filter theo user này)

  CONTESTS TAB:
    List contest đã tham gia, rank đạt được, điểm số
```

**AI Chatbot Page (Full-screen RAG Assistant)**

```
Thiết kế trang Chatbot AI độc lập (ngoài embedded trong problem page).

URL: /ai hoặc /assistant

Layout: Full-height chat interface, giống terminal/IDE vibe.

Left Sidebar (240px) — Chat History:
  Header: "[ DMOJ AI ]"
  List các cuộc hội thoại trước:
    "P-1042 — Dijkstra help" | 2h ago
    "Why TLE on case 7?" | yesterday
    "Explain segment tree" | 3d ago
  Nút: [+ New Chat] ở trên cùng

Main Chat Area:
  Header bar:
    - "DMOJ RAG Assistant" (monospace)
    - Context indicator: "📎 No problem selected" hoặc "📎 P-1042 + Submission #58291"
    - Nút: [Attach Problem] [Attach Submission]

  Chat messages:
    AI message:
      Avatar "[AI]" bracket style, nền #111827, text IBM Plex Sans
      Code blocks trong response: nền #0d1117, syntax highlighted, copy button

    User message:
      Align phải, nền #0077b620, border-left 2px #0077b6

  Welcome state (empty chat):
    Centered, monospace:
    "> DMOJ AI initialized."
    "> RAG knowledge base: loaded."
    "> Context: none attached."
    "> Awaiting query..."

    Suggested prompts dạng lệnh:
    [explain_algorithm --topic="dijkstra"]
    [debug_code --submission=latest]
    [hint --problem=current --level=gentle]

  Input area (bottom, sticky):
    - Textarea multi-line: "Type your question..."
    - Attach button (clip icon): đính kèm problem hoặc submission
    - Send button: [  ⏎ Send  ]
    - Disclaimer nhỏ: "AI may make mistakes. Always verify logic independently."
```

**Authentication Pages (Login / Register)**

```
Thiết kế trang Login và Register — minimal, terminal aesthetic.

Layout: Centered card, max-width 400px, nền page là dot-grid pattern

LOGIN PAGE:
  Header:
    ASCII-style logo hoặc "DMOJ" lớn, monospace
    Tagline: "// authenticate to continue"

  Form:
    Label style: "username_" (monospace, nhỏ, #7a9bb5)
    Input: full-width, nền #111827, border #1e2d3d,
           focus: border #0077b6 + glow, monospace font, blinking cursor

    Fields:
    → username hoặc email
    → password (toggle show/hide)

    Checkbox: [  ] Remember this machine

    Submit: [  →  Login  ] — full width, #0077b6

    Links: "forgot password" | "create account"

    Divider: —— or ——
    OAuth: [  Continue with GitHub  ] — outlined, GitHub icon

REGISTER PAGE:
  Tương tự Login nhưng fields:
  → username (unique check realtime: "✓ available" | "✗ taken")
  → email
  → password + confirm password (strength meter:
    ░░░░ WEAK | ██░░ FAIR | ████ STRONG)

  Submit: [  →  Create Account  ]

  Terms line nhỏ: "By registering you agree to the Terms of Service."
```

**Các Trang Admin — DMOJ Online Judge**

**Dashboard Tổng Quan**

```
Thiết kế trang Admin Dashboard cho DMOJ Online Judge.

Design System: dark bg #0a0e14, primary #0077b6, JetBrains Mono headings,
IBM Plex Sans body, Geek Minimalist style, terminal aesthetic.

Layout: 60px icon sidebar (cố định trái) + top header bar + main content area.

TOP HEADER BAR (sticky, height 48px):
  - Trái: Breadcrumb monospace — "admin@dmoj > dashboard"
  - Phải:
    → Notification bell icon + badge đỏ (số alert)
    → Avatar admin nhỏ + "admin_root ▼" dropdown
    → [  ⏻ Logout  ] ghost button

LEFT SIDEBAR (60px, icon only):
  Các icon với tooltip hover (monospace label):
    [⊞] Dashboard — active state: icon màu #0077b6, left border 2px #0077b6
    [✦] Problems
    [◈] Test Cases
    [⚡] Contests
    [👥] Users
    [📨] Submissions
    [🤖] AI / RAG
    [📊] Analytics
    [⚙] Settings
    [🖥] Judge Nodes

  Phân cách bằng thin line #1e2d3d giữa các nhóm chức năng.
  Sidebar nền #090d12 (tối hơn main một chút).

MAIN CONTENT — Dashboard:

  Page title: "// admin_dashboard" (JetBrains Mono, 24px, #e8f4f8)
  Subtitle: "System overview — refreshed every 30s" (#7a9bb5, nhỏ)

  KPI ROW (4 cards ngang, grid 4 cột):
    Card 1 — Total Problems
      Số lớn: "2,418" (#00b4d8, JetBrains Mono, 36px)
      Label: "problems in database"
      Delta: "▲ +12 this week" (#22c55e, nhỏ)

    Card 2 — Active Users (24h)
      Số: "3,841"
      Label: "unique users today"
      Delta: "▲ +8.4% vs yesterday"

    Card 3 — Submissions Today
      Số: "14,209"
      Label: "submissions in last 24h"
      Delta: "▼ -3.1% vs avg" (#ef4444)

    Card 4 — Judge Queue
      Số: "7" — màu vàng nếu > 20, đỏ nếu > 50
      Label: "pending in queue"
      Sub: "3/4 workers online"

    Card style: bg #111827, border 1px #1e2d3d,
    hover: border #0077b6 + glow, padding 20px, no border-radius > 4px

  ROW 2 — Charts (2 cột):

    Chart trái (60%): "Submission Volume — Last 7 Days"
      Line chart:
        - X axis: các ngày (Mon–Sun), monospace label
        - Y axis: số submissions
        - Line màu #0077b6, area fill gradient xuống
        - Điểm data: dot nhỏ, hover tooltip monospace:
          "Wed 21 May: 16,402 submissions"
        - Nền chart: #0d1117, grid lines #1e2d3d nhạt

    Chart phải (40%): "Verdict Distribution (today)"
      Donut chart nhỏ:
        ACCEPTED: #22c55e — 54%
        WRONG ANSWER: #ef4444 — 28%
        TLE: #f59e0b — 11%
        RE: #f97316 — 5%
        CE: #a855f7 — 2%
      Legend: dạng list dưới chart, monospace, ký hiệu [■] trước màu

  ROW 3 — 2 cột:

    Trái: "Judge Node Status"
      Table nhỏ:
      Node | Status | Load | Queue | Uptime
      worker-1 | [ONLINE] ● | 67% | 3 jobs | 14d 6h
      worker-2 | [ONLINE] ● | 45% | 2 jobs | 14d 6h
      worker-3 | [ONLINE] ● | 89% | 7 jobs | 2d 1h
      worker-4 | [OFFLINE] ○ | —  | — | —

      Status dots: xanh lá = online, đỏ = offline, vàng = degraded
      Nút dưới: [+ Add Node] [Restart All]

    Phải: "Recent Admin Activity Log"
      Feed dạng terminal, monospace, scrollable:
      [10:42] admin_root published problem P-1043
      [10:31] admin_root banned user "spam_bot_99"
      [09:15] system auto-rejudged 142 submissions (P-1041 updated)
      [08:00] contest "Weekly #24" started automatically
      Mỗi dòng có timestamp #7a9bb5, action text #e8f4f8

  ROW 4 — "Recent Flagged Submissions" (full width):
    Bảng nhỏ những submission bị nghi ngờ cheating/plagiarism:
    Sub ID | User | Problem | Similarity | Flagged By | Action
    #58201 | user_x | P-1042 | 94% similar | AI detector | [Review] [Dismiss]
    Header màu #ef4444 để nổi bật mức độ ưu tiên.
```

**Problem Management**

```
Thiết kế trang quản lý bài tập (Problem Management) cho admin DMOJ.

Breadcrumb: "admin@dmoj > problems"

HEADER ROW:
  - Title: "// problems"
  - Phải: nút [  + New Problem  ] — filled #0077b6
         nút [  ↑ Bulk Import  ] — outlined
         nút [  ↓ Export CSV  ] — ghost

TOOLBAR / FILTER BAR (dưới header):
  - Search: "_ search by title, id, tag..." (monospace placeholder)
  - Filter dropdowns:
    [Difficulty ▼] [Status ▼] [Tag ▼] [Author ▼]
  - Sort: "Sort by: [Created Date ▼]"
  - View toggle: [≡ Table] [⊞ Grid] — table là default

PROBLEM TABLE:
  Columns (resizable headers):
  ID | Title | Difficulty | Tags | AC Rate | Submissions | Status | Updated | Actions

  Row ví dụ:
  P-1043 | "Minimum Spanning Tree" | [Hard] | [Graph][MST] |
  28.4% | 892 | [Published] | 2025-05-20 | [Edit][Clone][Archive]

  Status badges:
  [Published] — text #22c55e, border #22c55e
  [Draft] — text #f59e0b, border #f59e0b
  [Archived] — text #7a9bb5, border #7a9bb5
  [Contest-only] — text #a855f7, border #a855f7

  Actions (icon buttons, tooltip on hover):
  ✎ Edit | ⧉ Clone | 🗄 Archive | 🔗 View Public | ⚠ Rejudge All

  Bulk actions: checkbox cột đầu, khi chọn nhiều rows hiện:
  "3 selected: [Publish All] [Archive All] [Delete] [Rejudge]"

PAGINATION:
  "Showing 1–25 of 2,418 problems"
  [< 1 2 3 ... 97 >] — minimal, monospace
```

**Problem Editor (Create / Edit)**

```
Thiết kế trang tạo/chỉnh sửa bài tập — layout phức tạp nhất trong admin.

Breadcrumb: "admin@dmoj > problems > new_problem"
hoặc: "admin@dmoj > problems > P-1043 > edit"

LAYOUT: Full-height split-pane (resizable handle ở giữa)
  - Trái 50%: Editor Form
  - Phải 50%: Live Preview (render như user nhìn thấy)

--- LEFT PANEL: EDITOR FORM ---

Chia thành các collapsible sections (accordion):

SECTION 1: "[ BASIC INFO ]" — expanded mặc định
  - Problem Title: text input lớn, full width
    Placeholder: "e.g. Shortest Path in Weighted Graph"
  - Problem ID / Slug:
    Auto-generate từ title (editable)
    "P-1043" prefix cố định + input slug
    Realtime check: "✓ slug available" / "✗ already taken"
  - Author: user search autocomplete
  - Source: text input — "Codeforces 1234A" (nguồn gốc bài)
  - Visibility:
    radio buttons: ◉ Public  ○ Contest-only  ○ Draft  ○ Archived

SECTION 2: "[ DIFFICULTY & TAGS ]"
  - Difficulty selector:
    4 nút lớn toggle: [Easy] [Medium] [Hard] [Expert]
    Active: nền màu tương ứng (xanh/vàng/đỏ/tím)
  - Points: number input (điểm của bài, vd 100)
  - Tags:
    Tag input với autocomplete từ tag database
    Hiện tags đã chọn dạng pill có [×] xóa
    "dp" "graph" "greedy" "string" "math" ...

SECTION 3: "[ TIME & MEMORY LIMITS ]"
  Grid 2 cột:
  - Time Limit: number input + unit selector [ms ▼]
    Quick presets: [0.5s] [1s] [2s] [5s]
  - Memory Limit: number input + [MB ▼]
    Quick presets: [64MB] [256MB] [512MB]
  - Per-language overrides toggle:
    Khi bật: table nhỏ cho từng ngôn ngữ riêng TL/ML

SECTION 4: "[ PROBLEM STATEMENT ]"
  Toolbar markdown:
  B I U | H1 H2 H3 | code block | math | table | image upload

  Textarea lớn (CodeMirror với Markdown + LaTeX syntax highlight)

  Tab switcher: [✎ Edit] [👁 Preview] [⊟ Split]

  Note nhỏ: "Supports Markdown + KaTeX math. Use $...$ for inline, $$...$$ for block."

SECTION 5: "[ INPUT / OUTPUT FORMAT ]"
  2 textarea riêng biệt:
  - Input Format description (Markdown)
  - Output Format description (Markdown)

SECTION 6: "[ SAMPLE TEST CASES ]"
  Header: "Sample Cases (visible to users)"

  Mỗi sample case là một card:
  ┌─────────────────────────────────────────┐
  │ Sample #1                    [↑][↓][×] │
  │ Input:                Output:           │
  │ ┌──────────────┐  ┌──────────────┐    │
  │ │ 5 6          │  │ 14           │    │
  │ │ 1 2 3 4 5    │  │              │    │
  │ └──────────────┘  └──────────────┘    │
  │ Note (optional): "Simple small graph"  │
  └─────────────────────────────────────────┘

  Nút: [+ Add Sample Case]

SECTION 7: "[ CHECKER / VALIDATOR ]"
  - Checker type:
    ◉ Standard (exact match)
    ○ Token-based (ignore whitespace)
    ○ Special Judge (custom checker)
    ○ Interactive

  Nếu Special Judge: code editor nhỏ để viết checker
  - Validator: upload .cpp file cho validator (optional)

SECTION 8: "[ EDITORIAL ]" (collapsible, thường để sau)
  - Markdown editor cho editorial/solution explanation
  - Visibility: [Hidden] [Show after AC] [Always visible]

BOTTOM ACTION BAR (sticky):
  Trái: Last saved: "10:42:31 — auto-saved" (monospace, #7a9bb5)
  Phải:
  [  Save Draft  ] [  Preview as User  ] [  ▶ Publish  ]

--- RIGHT PANEL: LIVE PREVIEW ---
  Header: "// preview — user_view"
  Toggle: [Desktop] [Mobile]

  Render đúng như trang Problem Detail mà user thấy.
  Update realtime khi edit (debounce 500ms).
  Watermark mờ "PREVIEW" chéo góc để phân biệt.
```

**Test Case Manager**

```
Thiết kế trang quản lý test case cho từng bài tập.

Breadcrumb: "admin@dmoj > problems > P-1043 > test_cases"

HEADER:
  - Title: "// test_cases — P-1043: Minimum Spanning Tree"
  - Stats: "48 test cases | Total size: 2.4MB |
    All passed validator ✓"
  - Nút phải:
    [  + Add Case  ] [  ↑ Upload ZIP  ] [  ▶ Run Validator  ]
    [  ⟳ Rejudge All Submissions  ]

UPLOAD ZONE (nổi bật, trên cùng nếu chưa có test case):
  Dashed border #0077b6, nền #0077b610
  Icon upload lớn ở giữa
  "Drop .zip file here or click to upload"
  "Expected format: 01.in / 01.out / 02.in / 02.out ..."
  Progress bar khi uploading.

TEST CASE TABLE:
  Columns:
  # | Input Preview | Output Preview | Size | Points | Subtask | Validated | Actions

  Row:
  01 | "5 6\n1 2 4\n..." | "14" | 2.1KB | 10pts | Sub#1 | ✓ | [View][Edit][Delete]
  02 | "100 500\n..." | "9842" | 45KB | 10pts | Sub#1 | ✓ | [View][Edit][Delete]
  ...

  Input/Output Preview: truncated, monospace, hover để xem full trong tooltip

  SUBTASK GROUPING (nếu dùng subtask):
  Có thể group rows theo subtask:
  ▼ SUBTASK 1 — 30 points (cases 1–10)
    [rows 1–10]
  ▼ SUBTASK 2 — 70 points (cases 11–48)
    [rows 11–48]

INLINE EDITOR (khi click Edit hoặc Add):
  Mở expanded row hoặc modal:
  ┌──────────────────────────────────────────────────────┐
  │ Edit Test Case #03                                   │
  │                                                      │
  │ INPUT:                    OUTPUT:                    │
  │ ┌─────────────────────┐  ┌─────────────────────┐   │
  │ │ 5 6                 │  │ 14                  │   │
  │ │ 1 2 4               │  │                     │   │
  │ │ 2 3 1               │  │                     │   │
  │ │ ...                 │  │                     │   │
  │ └─────────────────────┘  └─────────────────────┘   │
  │                                                      │
  │ Points: [10] Subtask: [1 ▼] [✓ Run Validator]       │
  │                              [Cancel] [Save Case]    │
  └──────────────────────────────────────────────────────┘

VALIDATOR RESULTS PANEL (slide down khi run validator):
  "Running validator on 48 cases..."
  Progress: ████████████░░░░ 38/48
  Results:
  ✓ Case 01 — valid
  ✓ Case 02 — valid
  ✗ Case 15 — INVALID: "N exceeds constraint (N=100001, max=100000)"
  Highlight case lỗi màu đỏ trong table.
```

**Contest Management**

```
Thiết kế trang quản lý contest.

Breadcrumb: "admin@dmoj > contests"

CONTEST LIST VIEW:
  Header: "// contests"
  Nút phải: [  + New Contest  ]

  3 tabs: [  Ongoing (1)  ] [  Upcoming (3)  ] [  Past (47)  ]

  Contest Card (dạng row card, rộng):
  ┌────────────────────────────────────────────────────────┐
  │ [LIVE] ●  Weekly Algorithm Contest #24                 │
  │ Started: 19:00 May 25 | Duration: 3h | Ends in: 01:24 │
  │ Problems: 6 | Participants: 482 | Type: ICPC           │
  │                                                        │
  │ [  Edit  ] [  View Scoreboard  ] [  End Now  ]         │
  └────────────────────────────────────────────────────────┘

CONTEST EDITOR (Create/Edit) — Full Page:

  Breadcrumb: "admin@dmoj > contests > new_contest"

  SECTION 1: "[ CONTEST INFO ]"
    - Contest Name: text input lớn
    - Short Name / Slug: "weekly-24"
    - Contest Type:
      [ICPC] [IOI] [AtCoder] [Custom]
      Tooltip giải thích mỗi loại (scoring rules khác nhau)
    - Description: Markdown editor ngắn (hiện trên contest page)
    - Is Rated: toggle on/off

  SECTION 2: "[ SCHEDULE ]"
    Grid 2 cột:
    - Start Time: datetime picker (có timezone selector)
    - Duration: number + [hours ▼] [minutes ▼]
    - End Time: auto-calculate, editable override
    - Registration Opens: datetime (trước start)
    - Registration Closes: datetime

    Preview dạng timeline:
    ──●──────────────●────────────────────●──
    Reg opens    Contest starts       Contest ends
    May 24 18:00  May 25 19:00        May 25 22:00

  SECTION 3: "[ PROBLEMS ]"
    Header: "Contest Problems (drag to reorder)"

    Problem list với drag handle:
    ⠿ P1 | search & select problem | Points: [100] | [×]
    ⠿ P2 | "Graph BFS" (P-0391) | Points: [200] | [×]
    ⠿ P3 | — empty slot — | | [×]

    Nút: [+ Add Problem]

    Problem search: autocomplete từ problem database
    Note: "In ICPC mode, points field is ignored (penalty-based)"

  SECTION 4: "[ PARTICIPANTS ]"
    Radio: ◉ Open (anyone can join)
           ○ Invite-only
           ○ Organization-only

    Nếu Invite-only: text area nhập danh sách username/email
    Team contest toggle: on/off, nếu on → max team size: [3]

  SECTION 5: "[ SCORING RULES ]"
    Chỉ hiện khi type = Custom:
    - Penalty per wrong submission: [20] minutes
    - Partial scoring: toggle
    - Score formula: text input

  BOTTOM BAR:
  [Save Draft] [Preview Contest Page] [  ▶ Publish Contest  ]

```

**User Management**

```
Thiết kế trang quản lý người dùng.

Breadcrumb: "admin@dmoj > users"

HEADER:
  Title: "// users"
  Stats inline: "18,204 total | 3,841 active today | 12 banned"
  Nút phải: [  + Create User  ] [  ↓ Export  ]

FILTER / SEARCH BAR:
  - Search: "_ search username, email..."
  - Filters: [Role ▼] [Status ▼] [Joined ▼] [Country ▼]
  - Sort: [Last Active ▼]

USER TABLE:
  Columns:
  Avatar | Username | Email | Role | Rating | Joined | Last Active | Status | Actions

  Role badges:
  [admin] — #ef4444 | [moderator] — #f59e0b | [user] — #7a9bb5

  Status badges:
  [Active] #22c55e | [Banned] #ef4444 | [Suspended] #f59e0b | [Unverified] #7a9bb5

  Actions: [View Profile] [Edit] [Ban] [Impersonate] [Delete]

  "Impersonate" (login as user để debug): cảnh báo confirm trước khi dùng

USER DETAIL DRAWER (slide in từ phải khi click username):
  Header: "user_482" + avatar lớn + badges

  Tabs: [Info] [Submissions] [Contests] [Flags]

  INFO TAB:
    - Email, join date, last IP, country
    - Rating history: mini line chart
    - Problems solved: số + breakdown
    - Action buttons:
      [Edit Profile] [Reset Password] [Send Email]
      [Ban User ▼] dropdown: 1 day / 7 days / 30 days / Permanent
      [Promote to Moderator]

  FLAGS TAB:
    - Plagiarism flags: list submissions bị nghi vấn
    - Reports từ user khác
    - Action: [Dismiss All] [Issue Warning] [Ban]

BAN MODAL (khi click Ban):
  ┌────────────────────────────────────┐
  │ Ban user: user_482                 │
  │                                    │
  │ Duration: ◉ 7 days  ○ 30 days     │
  │           ○ Permanent              │
  │                                    │
  │ Reason (shown to user):            │
  │ [text area]                        │
  │                                    │
  │ Internal note (admin only):        │
  │ [text area]                        │
  │                                    │
  │ ☐ Invalidate all active sessions   │
  │ ☐ Hide all submissions             │
  │                                    │
  │ [Cancel]  [  ⚠ Confirm Ban  ]      │
  └────────────────────────────────────┘
```

**Submission Inspector**

```
Thiết kế trang xem và quản lý tất cả submissions.

Breadcrumb: "admin@dmoj > submissions"

HEADER:
  Title: "// submissions"
  Realtime counter: "● Live — 14,209 submissions today"

FILTER BAR:
  - Search by: Sub ID | Username | Problem ID
  - Verdict filter: [All] [AC] [WA] [TLE] [RE] [CE] [Flagged]
  - Language: [All ▼]
  - Date range: [Today ▼] custom range picker
  - Problem: autocomplete search

SUBMISSION TABLE:
  Columns:
  ID | Time | User | Problem | Lang | Verdict | Runtime | Memory | Flags | Actions

  Hàng flagged (nghi ngờ): highlight nhẹ nền đỏ #ef444410

  Actions: [View Code] [Rejudge] [Mark Plagiarism] [Delete]

SUBMISSION DETAIL MODAL (full-screen overlay):
  Header bar:
    "Submission #58291" | "[ACCEPTED]" | user_482 | P-1043 | C++17
    Nút phải: [Rejudge] [Flag Plagiarism] [Download .cpp] [×Close]

  Layout 2 cột:

  Trái — Source Code (60%):
    Monaco viewer, syntax highlighted, read-only
    Line numbers, search in file (Ctrl+F)
    Compilation output box dưới (nếu CE)

  Phải — Judge Results (40%):
    Overall verdict: "[✓ ACCEPTED]" lớn, màu xanh lá
    Runtime: 48ms / 1000ms | Memory: 12.4MB / 256MB

    Test case results table:
    Case | Verdict | Runtime | Memory
    01   | ✓ AC    | 12ms    | 8.2MB
    02   | ✓ AC    | 45ms    | 11.1MB
    ...

    Mỗi case expandable → xem input/output/expected (nếu admin)

    Subtask scores (nếu có):
    Sub#1: 30/30 | Sub#2: 70/70

  Plagiarism section (nếu flagged):
    "Similarity: 94% with Submission #58105 by user_xyz"
    [View Side-by-Side Comparison]

PLAGIARISM COMPARISON VIEW (full page):
  2 cột song song:
  Trái: Code của user_482 (Sub #58291)
  Phải: Code của user_xyz (Sub #58105)

  Highlighted những đoạn giống nhau (màu vàng)
  Similarity score header: "94.2% similar — 187/200 lines match"

  Actions: [Mark Both as Plagiarism] [Dismiss] [Ban Both Users]

```

**AI / RAG Management**

```
Thiết kế trang quản lý hệ thống AI Chatbot RAG.

Breadcrumb: "admin@dmoj > ai_rag"

HEADER:
  Title: "// ai_rag_system"
  Status: "● RAG Engine: Online | Model: claude-3-sonnet |
  Knowledge Base: 2,418 problems indexed"

TAB BAR: [Overview] [Knowledge Base] [Conversations] [Prompt Config] [Usage & Cost]

--- TAB 1: OVERVIEW ---

  Status Cards (4 ngang):
    Card 1: RAG Engine Status
      [● ONLINE] màu xanh lá
      "Last health check: 30s ago"
      Nút: [Restart Engine]

    Card 2: Questions Today
      "1,204 queries"
      "Avg response: 2.3s"

    Card 3: User Satisfaction
      "87% helpful" (từ thumbs up/down)
      "↑ +3% vs last week"

    Card 4: Token Usage Today
      "482,103 tokens"
      "Est. cost: $1.45"

  Chart: "Query Volume — Last 7 Days" (line chart)

  Top Questions Today (table):
    "Why did my code get TLE?" — 84 times
    "Explain Dijkstra algorithm" — 67 times
    "How to solve P-1043?" — 45 times

  Recent Error Log:
    [10:42] Context retrieval timeout for user_482 (>5s)
    [09:31] Model returned empty response — retried successfully
    Dạng terminal log, monospace

--- TAB 2: KNOWLEDGE BASE ---

  Header: "Indexed Documents"
  Stats: "2,418 problems | 312 editorials | 89 tutorials |
  Last re-indexed: 2h ago"

  Nút: [  ⟳ Re-index All  ] [  + Add Document  ]

  Document Table:
  Type | Title | Indexed | Chunks | Status
  Problem | P-1043 Minimum Spanning Tree | May 25 | 12 | ✓ Indexed
  Editorial | P-1043 Editorial | May 20 | 8 | ✓ Indexed
  Tutorial | "Graph Theory Basics" | May 10 | 45 | ✓ Indexed
  Tutorial | "DP on Trees" | — | — | [⟳ Pending]

  Status: ✓ Indexed | ⟳ Pending | ✗ Failed (link đỏ, retry button)

  Add Document form (slide-in panel):
    Type: [Problem] [Editorial] [Tutorial] [External Link]
    Content: Markdown editor hoặc URL input
    [Index Document]

--- TAB 3: CONVERSATIONS ---

  List các conversation của users với AI:

  Table: User | Started | Messages | Problem Context | Rated | Preview
  user_482 | 10:42 | 8 msgs | P-1043 | 👍 | "Why did my DFS get..."
  user_191 | 10:31 | 3 msgs | P-0391 | 👎 | "I don't understand..."

  Click row → mở full conversation transcript

  Conversation Viewer:
    Read-only chat view, giống chatbot UI nhưng là admin view
    Mỗi AI response có thêm:
    "Retrieved context: [P-1043 statement] [P-1043 editorial] [Sub #58291]"
    (collapsible, shows RAG sources dùng)

    Rating từ user: 👍 / 👎 + optional comment

    Admin actions: [Flag as Inappropriate] [Export]

--- TAB 4: PROMPT CONFIG ---

  System Prompt Editor:
    Label: "// system_prompt.txt"
    Textarea lớn (monospace, CodeMirror):
    Hiện system prompt hiện tại của RAG chatbot

  Config knobs:
    - Max context chunks: [5] (số chunks retrieve)
    - Max response tokens: [1000]
    - Temperature: [0.3] — slider 0–1
    - Model: dropdown [claude-sonnet-4 ▼]
    - Similarity threshold: [0.75] — ngưỡng retrieval

  Suggested Prompts Management:
    List các suggested prompts hiển thị cho user:
    "Why did my solution get WA?" [Edit][Delete]
    "Explain this algorithm" [Edit][Delete]
    [+ Add Prompt]

  Nút: [Save Config] [Test with Sample Query]

  Test Panel (slide in):
    Input query + context (problem ID, submission ID)
    [Run Test]
    Hiện response + retrieved chunks + latency

--- TAB 5: USAGE & COST ---

  Cost Dashboard:
    Line chart: "Daily Token Usage & Cost — Last 30 Days"

    Breakdown table:
    Date | Queries | Input Tokens | Output Tokens | Est. Cost
    May 25 | 1,204 | 361,200 | 120,400 | $1.45
    May 24 | 987 | 296,100 | 98,700 | $1.19

    Monthly summary: "May 2025: $32.40 / $50 budget"
    Budget warning threshold: [50 ▼] USD — alert nếu vượt

    Cost by feature:
    Problem chatbot: 78% | Full-page AI: 22%
```

**Analytics**

```
Thiết kế trang phân tích dữ liệu toàn hệ thống.

Breadcrumb: "admin@dmoj > analytics"

Date Range Selector (top right): [Last 7 days ▼] custom picker

TAB BAR: [Platform] [Problems] [Users] [Contests]

--- TAB PLATFORM ---

  Row 1 — KPI trend cards (4 ngang):
    DAU (Daily Active Users): 3,841 ▲12%
    Submissions/day: 14,209 ▲8%
    New Registrations: 142 ▼3%
    Avg Session Duration: 24min ▲5%

  Row 2 — Charts (2 cột):
    Trái: DAU Line chart — 7 ngày
    Phải: Traffic by Hour heatmap (24h x 7 ngày)
          Ô tối = ít, ô sáng #0077b6 = nhiều
          "Peak: Mon–Fri 20:00–22:00 (Vietnam timezone)"

  Row 3:
    Trái: Language popularity (bar chart ngang):
      C++17:  ████████████████ 64%
      Python: ██████ 22%
      Java:   ███ 9%
      Others: █ 5%

    Phải: Verdict distribution pie/donut (như dashboard)

--- TAB PROBLEMS ---

  Problem Performance Table:
  Title | Views | Submissions | AC Rate | Avg Attempts | Difficulty Match

  "Difficulty Match": so sánh intended difficulty với actual AC rate
  Nếu AC rate quá cao cho bài Hard → flag "Too Easy?" badge vàng
  Nếu quá thấp → flag "Too Hard?" badge đỏ

  Chart: "AC Rate Distribution across all problems"
  Histogram bar chart — phân phối AC rate

--- TAB USERS ---

  User Growth chart: line chart, new users per day

  Rating Distribution:
    Bell curve chart — phân phối rating users
    Đánh dấu các mốc Grandmaster/Master/Expert/etc.

  Geographic heatmap:
    World map (SVG choropleth) tô màu theo số users theo nước
    Tooltip: "Vietnam: 8,204 users (45%)"

  Retention table:
    Week 1 | Week 2 | Week 4 | Month 3
    100%   | 68%    | 45%    | 29%

--- TAB CONTESTS ---

  Contest participation trend: line chart

  Table — Contest History + Stats:
  Name | Date | Participants | Avg Score | Problems Solved Rate
  Weekly #24 | May 25 | 482 | 187pts | P1: 89% P2: 67% P3: 34%
```

**Judge Node Manager**

```
Thiết kế trang quản lý các judge server/node.

Breadcrumb: "admin@dmoj > judge_nodes"

HEADER:
  Title: "// judge_nodes"
  Overall status: "● System Healthy — 3/4 nodes online | Queue: 7 pending"

NODE CARDS (grid 2x2 hoặc 1 cột nếu ít):

  Node Card — "worker-1":
  ┌──────────────────────────────────────────────────┐
  │ ● worker-1                          [ONLINE]     │
  │ IP: 10.0.0.11 | OS: Ubuntu 22.04               │
  │                                                  │
  │ CPU:  ████████████░░░░░░░░ 67%    4 cores       │
  │ RAM:  ████████░░░░░░░░░░░░ 42%    8GB total     │
  │ Jobs: 3 running                                  │
  │                                                  │
  │ Current jobs:                                    │
  │  > Sub #58301 — P-1043 (C++) — case 5/10        │
  │  > Sub #58302 — P-0391 (Python) — case 2/5      │
  │  > Sub #58305 — P-0021 (Java) — compiling...    │
  │                                                  │
  │ Uptime: 14d 6h 23m | Last ping: <1s ago         │
  │                                                  │
  │ [  Pause Queue  ] [  Drain & Restart  ] [  SSH  ]│
  └──────────────────────────────────────────────────┘

  Node Card — "worker-4" (OFFLINE):
  ┌──────────────────────────────────────────────────┐
  │ ○ worker-4                          [OFFLINE]    │
  │ Last seen: 2h 14m ago                            │
  │ Last error: "Connection refused on port 9999"    │
  │                                                  │
  │ [  Retry Connect  ] [  View Logs  ] [  Remove  ] │
  └──────────────────────────────────────────────────┘

ADD NODE FORM (slide-in panel):
  - Node Name: "worker-5"
  - Host / IP: text input
  - Port: [9999]
  - Auth Key: password input
  - [  Test Connection  ] → "✓ Connected successfully"
  - [  Add Node  ]

QUEUE MONITOR (bottom section, full width):
  Title: "// judge_queue — live"

  Realtime feed (auto-update):
  Position | Sub ID | User | Problem | Language | Wait Time | Status
  1 | #58310 | user_x | P-1043 | C++ | 2s | [Assigning...]
  2 | #58311 | user_y | P-0021 | Java | 4s | [Waiting]
  3 | #58312 | user_z | P-1043 | Py | 6s | [Waiting]

  Nút: [Clear Queue] [Pause All Judging] [Priority Bump ▼]

JUDGE LOGS PANEL (expandable bottom drawer):
  Terminal-style realtime log stream:
  [10:42:31] worker-1: accepted sub #58291 — 48ms, 12.4MB
  [10:42:29] worker-2: WA sub #58289 — case 4 expected "14" got "15"
  [10:42:25] worker-1: compiling sub #58291 (C++17)...
  [10:42:20] worker-3: TLE sub #58280 — exceeded 1000ms on case 7

  Màu: timestamp #7a9bb5 | ACCEPTED #22c55e | WA/TLE/RE #ef4444 |
       info #e8f4f8
  Filter: [All] [Errors only] [By node ▼]
```

**Settings**

```
Thiết kế trang cài đặt hệ thống.

Breadcrumb: "admin@dmoj > settings"

Layout: Left nav menu (200px) + content area

LEFT SETTINGS NAV:
  [General]
  [Appearance]
  [Email / SMTP]
  [Authentication]
  [Judging]
  [Scoring & Ratings]
  [Notifications]
  [API Keys]
  [Danger Zone]

--- GENERAL ---
  Site Name: "DMOJ"
  Site URL: "https://dmoj.example.com"
  Maintenance Mode: toggle (nếu bật: banner warning đỏ preview)
  Default Language: dropdown
  Timezone: "Asia/Ho_Chi_Minh"
  Max submissions per hour (per user): [30]

--- APPEARANCE ---
  Logo upload (hiện preview)
  Favicon upload
  Primary Color: color picker (mặc định #0077b6)
  Custom CSS: code textarea

--- EMAIL / SMTP ---
  SMTP Host, Port, Username, Password
  From Email, From Name
  Nút [Send Test Email]

--- JUDGING ---
  Default Time Limit: [1000] ms
  Default Memory Limit: [256] MB
  Allowed Languages: multi-select checklist
  Sandbox type: dropdown [isolate / docker]
  Max concurrent submissions per user: [3]

--- API KEYS ---
  Table: Key Name | Key (masked) | Created | Last Used | Actions
  "judge-worker-1" | dmoj_•••••••••abc | May 1 | 10min ago | [Revoke]
  Nút: [+ Generate New Key]

--- DANGER ZONE ---
  Section nền #ef444410, border #ef4444:

  [  Reset All Ratings  ] — confirm modal
  [  Clear Judge Queue  ] — confirm modal
  [  Delete All Submissions  ] — require typing "DELETE" để xác nhận
  [  Factory Reset  ] — require typing site name để xác nhận

  Mỗi nút danger: outlined đỏ, hover nền đỏ nhạt
  Confirm modal: yêu cầu nhập text xác nhận trước khi execute

SAVE BAR (sticky bottom):
  "Unsaved changes" indicator khi có thay đổi
  [  Discard  ] [  Save Settings  ]
```
