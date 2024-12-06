// นำเข้าโมดูล Todo เพื่อใช้สร้างงานใหม่
import Todo from './todo.js'

// ฟังก์ชันหลักสำหรับจัดการ Todo (เป็น factory function ที่สร้างชุดฟังก์ชันการจัดการ Todo)
export default function todoManagement() {
  // **1. ตัวแปร todos**:
  // เป็น array ที่เก็บรายการ Todo ทั้งหมด
  const todos = []

  // **2. ฟังก์ชัน addTodo(desc)**:
  // ใช้เพิ่มรายการใหม่ลงใน `todos`
  function addTodo(desc) {
    const todo = new Todo(desc) // สร้าง object ของ Todo ใหม่
    todos.push(todo) // เพิ่ม object ที่สร้างใหม่ลงใน array `todos`
    return todo.id // คืนค่า ID ของ Todo ที่เพิ่ม
  }

  // **3. ฟังก์ชัน findTodo(searchId)**:
  // ใช้ค้นหา Todo ตาม ID ที่ส่งเข้ามา
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId) // ใช้ฟังก์ชัน find ค้นหา Todo ที่มี id ตรงกับ searchId
  }

  // **4. ฟังก์ชัน findIndexTodo(searchId)**:
  // ใช้ค้นหา index ของ Todo ใน array `todos` ตาม ID
  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId) // ใช้ findIndex ค้นหา index ของ Todo
  }

  // **5. ฟังก์ชัน removeTodo(removeId)**:
  // ใช้ลบ Todo ออกจาก array `todos`
  function removeTodo(removeId) {
    const foundIndex = findIndexTodo(removeId) // ค้นหา index ของ Todo ที่จะลบ
    todos.splice(foundIndex, 1) // ใช้ splice เพื่อลบ Todo ที่ตำแหน่งที่เจอ
  }

  // **6. ฟังก์ชัน getTodos()**:
  // ใช้คืนค่ารายการ Todo ทั้งหมด
  function getTodos() {
    return todos // คืนค่า array `todos`
  }

  // **7. ฟังก์ชัน getNumberOfDone()**:
  // ใช้นับจำนวนรายการ Todo ที่ทำเสร็จแล้ว
  function getNumberOfDone() {
    return todos.filter((todo) => todo.done === true).length // ใช้ filter เลือกเฉพาะ Todo ที่มีสถานะ done เป็น true แล้วนับจำนวน
  }

  // **8. ฟังก์ชัน getNumberOfNotDone()**:
  // ใช้นับจำนวนรายการ Todo ที่ยังไม่เสร็จ
  function getNumberOfNotDone() {
    return todos.filter((todo) => todo.done === false).length // ใช้ filter เลือกเฉพาะ Todo ที่มีสถานะ done เป็น false แล้วนับจำนวน
  }

  // **9. ฟังก์ชัน clearTodo()**:
  // ใช้ลบรายการ Todo ทั้งหมด
  function clearTodo() {
    this.todos = [] // รีเซ็ต array `todos` ของ object นี้
    return (todos = []) // คืนค่า array ว่าง (อัปเดตตัวแปร `todos` ด้วย)
  }

  // **10. ฟังก์ชัน setItemToDone(doneId)**:
  // ใช้เปลี่ยนสถานะของ Todo ที่ระบุให้เป็น "เสร็จแล้ว"
  function setItemToDone(doneId) {
    return findTodo(doneId).setDone(true) // ค้นหา Todo ที่มี ID ตรงกับ doneId แล้วเรียกใช้เมธอด setDone(true)
  }

  // **11. คืนค่าฟังก์ชันที่จัดการ Todo ทั้งหมด**:
  // ฟังก์ชันทั้งหมดนี้สามารถถูกเรียกใช้งานได้ในที่อื่นหลังจากนำเข้าโมดูล
  return {
    addTodo,
    findTodo,
    removeTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone,
  }
}

// ตัวอย่างโค้ดที่อยู่ในคอมเมนต์สำหรับการทดสอบ
// const tdm = todoManagement() // สร้าง object จัดการ Todo
// console.log(tdm.addTodo('Shopping')) // เพิ่มรายการ 'Shopping' แล้วแสดง ID
// console.log(tdm.addTodo('Reading')) // เพิ่มรายการ 'Reading' แล้วแสดง ID
// console.log(tdm.addTodo('Swimming')) // เพิ่มรายการ 'Swimming' แล้วแสดง ID
// console.log(tdm.getTodos()) // แสดงรายการทั้งหมด
// console.log(tdm.findTodo(1)) // ค้นหา Todo ที่มี ID = 1
// console.log(tdm.findTodo(2)) // ค้นหา Todo ที่มี ID = 2
// tdm.removeTodo(2) // ลบ Todo ที่มี ID = 2
// console.log(tdm.getTodos()) // แสดงรายการทั้งหมดหลังลบ
