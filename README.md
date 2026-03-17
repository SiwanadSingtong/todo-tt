# Todo List — Front-End Developer Test

เว็บแอปพลิเคชันสำหรับจัดการรายการที่ต้องทำ (Todo List)
**Live Demo: ** [https://todo-tt-phi.vercel.app/](https://todo-tt-phi.vercel.app/)

## Features

- **View Todos** — ดึงข้อมูล mockup จาก JSONPlaceholder API เมื่อโหลดเข้าเว็บครั้งแรก
- **Add Todo** — สร้างรายการใหม่ผ่านหน้าต่าง Modal (Add Task)
- **Edit Todo** — แก้ไขชื่อรายการหรือสถานะความสำเร็จได้ทันที
- **Delete Todo** — ลบรายการพร้อมระบบยินยันก่อนลบ
- **Toggle Status** — สลับสถานะรายการระหว่าง "เสร็จสิน" หรือ "ยังไม่เสร็จสิ้น" ด้วย Checkbox
- **Filter** — กรองรายการตามสถานะ: ทั้งหมด / กำลังทำ / เสร็จสิ้นแล้ว
- **Loading & Error States** — แสดงตัวโหลดระหว่างดึงหรืออัพเดทข้อมูล และแสดงข้อความแจ้งเตือนเมื่อเกิดข้อผิดพลาด
- **Toast Notifications** — ระบบแจ้งเตือนขนาดเล็ก เพื่อบอกผลลัพธ์การทำรายการ

## Tech Stack

| Tool | Purpose | Reason |
|------|---------|--------|
| [Next.js 16](https://nextjs.org/) | React framework | ระบบมาตรฐาน รองรับ TypeScript และมีระบบ App Router ในตัว |
| [React Context API](https://react.dev/reference/react/createContext) | State management | จัดการ state ลดความซับซ้อนในการส่ง Props แบบง่าย ไม่ต้องติดตั้ง library เพิ่มเติม |
| [Axios](https://axios-http.com/) | HTTP client | รองรับระบบ Interceptor เพื่อจัดการข้อผิดพลาด |
| [MUI (Material UI)](https://mui.com/) | UI components | มี component ให้พร้อมใช้งาน (เช่น Dialog, Button, Checkbox) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling | CSS Framework แบบ Utility ช่วยให้การออกแบบหน้าเว็บทำได้สะดวกขึ้น |
| [notistack](https://notistack.com/) | Toast notifications | ระบบแจ้งเตือนขนาดเล็ก |
| [Lucide React](https://lucide.dev/) | Icons | น้ำหนักเบา และมีดีไซน์ที่สอดคล้องกันทั้งชุด |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) (แนะนำ)

### การติดตั้ง

```bash
# โคลนโปรเจคเข้ามายังเครื่อง
git clone <repository-url>
cd todo-tt

# ติดตั้ง dependencies
pnpm install

# รันโปรเจคแบบ Developer จากนั้นเข้าถึงหน้าเว็บผ่าน localhost:3000
pnpm dev
```

เปิด [http://localhost:3000](http://localhost:3000) ใน browser ของคุณ

## แนวคิด

### Architecture

โปรเจกต์นี้ถูกออกแบบโดยยึดหลักการแยกหน้าที่ความรับผิดชอบ (Separation of Concerns) อย่างชัดเจน:

1. **`libs/axios.ts`** — สร้าง Axios Instance เพื่อกำหนด Base URL และระบบ Interceptor เพื่อปรับรูปแบบข้อผิดพลาดจาก API ให้เป็น object เดียวกันก่อนส่งต่อไปยังส่วนอื่นๆ

2. **`services/todoService.ts`** — รวบรวมการเรียก API ทั้งหมดไว้ในที่เดียว โดยจะไม่เรียกใช้ผ่าน Axios โดยตรง แต่จะผ่าน Service ก่อน ซึ่งช่วยในการจัดการ API ได้ง่าย

3. **`context/TodoContext.tsx`** — เก็บ State ของรายการ Todo และส่งต่อฟังก์ชัน `createTodo`, `updateTodo` และ `deleteTodo` ไปยัง Component ต่างๆได้ง่าย โดยไม่จำเป็นต้องโหลดหน้าใหม่ทั้งหมด

### UX Decisions

- **ปุ่มจัดการรายการจะถูกซ่อนไว้เป็นค่าเริ่มต้น** และจะแสดงขึ้นมาเฉพาะเมื่อนำเมาส์ไปชี้ที่การ์ดนั้น ๆ (`group-hover`), เพื่อช่วยให้หน้ารายการดูสะอาดตาและไม่รกจนเกินไป
- **สถานะการโหลดแยกตามการกระทำ** เช่น การกดบันทึกหรือการลบ จะมีการติดตามสถานะแยกกัน เพื่อให้ Spinner แสดงเฉพาะบนปุ่มหรือ Modal ที่เกี่ยวข้อง แทนที่จะล็อกการทำงานทั้งหน้าเว็บ
- **แถบกรองข้อมูล** (ทั้งหมด / กำลังทำ / เสร็จสิ้นแล้ว) เพื่อให้ผู้ใช้จัดการรายการได้สะดวกขึ้นเมื่อมีจำนวนงานสะสมมากขึ้น