# ITCAMP Data Countdown

ตัวนับถอยหลังเวลาของค่าย Data ITCAMP, KMITL

ไปหน้า Countdown: [https://tjthanapat.github.io/itcamp-data-countdown/](https://tjthanapat.github.io/itcamp-data-countdown/)

# วิธี run server บน local

ใช้คำสั่ง `pnpm dev` เพื่อรันดูตัวอย่างบนเครื่อง local

# วิธี deploy เป็น static ลง GitHub page

1. เปลี่ยน `itcamp-data-countdown` เป็นชื่อ repo ของตัวเองในไฟล์ `vite.config.js`
```
export default defineConfig({
  plugins: [react()],
  base: '/itcamp-data-countdown/'
})
```
2. รันคำสั่ง `pnpm build`
3. รันคำสั่ง `pnpm run deploy`