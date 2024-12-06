// กำหนดการส่งออกคลาส Todo เพื่อให้ใช้งานได้ในไฟล์อื่น
export default class Todo {
  // สร้างสมาชิกแบบ static ชื่อ runningId เพื่อเก็บ ID ที่เพิ่มขึ้นเรื่อยๆ สำหรับทุก instance ของคลาสนี้
  // static หมายความว่าสมาชิกนี้เป็นของคลาส ไม่ใช่ของ instance ใดๆ
  static runningId = 1

  // ตัวสร้าง (constructor) สำหรับสร้าง instance ของคลาส Todo
  constructor(desc = 'N/A') {
    // กำหนดค่า id โดยใช้ runningId จาก static member ของคลาส
    // ต้องเรียกใช้โดยการอ้างอิงชื่อคลาส (Todo.runningId)
    this.id = Todo.runningId++

    // กำหนดค่าเริ่มต้นของ description จาก argument ที่ส่งมา
    // ถ้าไม่ได้ส่งค่ามาจะใช้ค่าเริ่มต้นเป็น 'N/A'
    this.description = desc

    // กำหนดสถานะเริ่มต้นของงานเป็น false (ยังไม่เสร็จ)
    this.done = false
  }

  // เมธอดสำหรับดึงข้อมูลของงานในรูปแบบ object
  getTodo() {
    return {
      id: this.id, // คืนค่า id ของงาน
      description: this.description, // คืนคำอธิบายของงาน
      done: this.done, // คืนสถานะของงาน (true/false)
    }
  }

  // เมธอดสำหรับเปลี่ยนคำอธิบายของงาน
  setDescription(desc) {
    this.description = desc // อัปเดตค่า description ด้วยค่าที่ส่งมา
  }

  // เมธอดสำหรับเปลี่ยนสถานะของงาน (true = เสร็จแล้ว, false = ยังไม่เสร็จ)
  setDone(done) {
    this.done = done // อัปเดตค่า done ด้วยค่าที่ส่งมา
  }
}
