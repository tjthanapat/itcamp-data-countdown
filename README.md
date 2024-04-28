# ITCAMP20 Daita Countdown

ตัวนับถอยหลังเวลาของค่าย Daita ITCAMP20 

ใช้คำสั่ง `pnpm dev` เพื่อรันดูตัวอย่างบนเครื่อง local


# วิธี deploy เป็น static ลง GitHub page

1. เปลี่ยน `itcamp20-daita-countdown` เป็นชื่อ repo ของตัวเองในไฟล์ `vite.config.js`
```
export default defineConfig({
  plugins: [react()],
  base: '/itcamp20-daita-countdown/'
})
```
2. รันคำสั่ง `pnpm build`
3. รันคำสั่ง `pnpm run deploy`