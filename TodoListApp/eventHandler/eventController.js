// นำเข้าฟังก์ชันสำหรับจัดการการแสดงผลใน UI และโมดูลการจัดการ Todo
import {
  showTodoItem, // แสดงรายการใหม่ใน UI
  showNumberOfDone, // แสดงจำนวนรายการที่ทำเสร็จแล้ว
  showNumberOfNotDone, // แสดงจำนวนรายการที่ยังไม่เสร็จ
  removeTodoItem, // ลบรายการออกจาก UI
} from '../UI/todoListUI.js'
import todoManagement from '../lib/todoManagement.js' // นำเข้าฟังก์ชันสำหรับจัดการข้อมูลของ Todo

// สร้างตัวจัดการ todo โดยเรียกใช้ฟังก์ชันที่ถูกนำเข้ามา
const todoManager = todoManagement()

// ฟังก์ชันจัดการการเพิ่มรายการ
function addTodoHandler() {
  const input = document.querySelector('input') // เลือกช่อง input ที่ใช้รับค่าจากผู้ใช้
  if (input.value !== '') {
    // ตรวจสอบว่าผู้ใช้ป้อนข้อความหรือไม่
    const newId = todoManager.addTodo(input.value) // เพิ่มรายการใหม่และรับ ID ของรายการที่สร้างขึ้น
    showTodoItem(newId, input.value) // แสดงรายการใหม่ใน UI

    // ดึงรายการที่ถูกเพิ่มมาโดยใช้ ID
    const todoItem = document.getElementById(newId)
    const buttons = todoItem.querySelectorAll('button') // เลือกปุ่มทั้งหมดในรายการนั้น
    const notDone = buttons[0] // ปุ่ม "Not Done"
    notDone.addEventListener('click', function () {
      // เพิ่ม Event Listener ให้ปุ่ม Not Done
      notDoneButtonHandler(newId) // เรียกใช้ฟังก์ชัน notDoneButtonHandler เมื่อคลิก
    })
    const remove = buttons[1] // ปุ่ม "Remove"
    remove.addEventListener('click', function () {
      // เพิ่ม Event Listener ให้ปุ่ม Remove
      removeButtonHandler(newId) // เรียกใช้ฟังก์ชัน removeButtonHandler เมื่อคลิก
    })
    input.value = '' // ล้างค่าที่ผู้ใช้พิมพ์ในช่อง input
  }

  // อัปเดตจำนวนรายการที่ทำเสร็จและยังไม่เสร็จใน UI
  showNumberOfDone(todoManager.getNumberOfDone())
  showNumberOfNotDone(todoManager.getNumberOfNotDone())
}

// ฟังก์ชันจัดการเมื่อกดปุ่ม "Not Done"
function notDoneButtonHandler(todoId) {
  const todoItem = document.getElementById(todoId) // ดึงรายการโดยใช้ ID
  const buttons = todoItem.querySelectorAll('button') // เลือกปุ่มทั้งหมดในรายการนั้น
  const notDone = buttons[0] // ปุ่ม "Not Done"
  const done = document.createElement('button') // สร้างปุ่มใหม่สำหรับ "Done"
  done.setAttribute('style', 'background-color:green') // ตั้งสีพื้นหลังให้ปุ่ม "Done"
  done.textContent = 'Done' // กำหนดข้อความในปุ่ม
  todoItem.replaceChild(done, notDone) // แทนที่ปุ่ม "Not Done" ด้วยปุ่ม "Done"
  todoManager.setItemToDone(todoId) // อัปเดตสถานะของรายการในตัวจัดการให้เป็น "Done"

  // อัปเดตจำนวนรายการที่ทำเสร็จและยังไม่เสร็จใน UI
  showNumberOfDone(todoManager.getNumberOfDone())
  showNumberOfNotDone(todoManager.getNumberOfNotDone())
}

// ฟังก์ชันจัดการเมื่อกดปุ่ม "Remove"
function removeButtonHandler(todoId) {
  removeTodoItem(todoId) // ลบรายการออกจาก UI
  todoManager.removeTodo(todoId) // ลบรายการออกจากตัวจัดการข้อมูล

  // อัปเดตจำนวนรายการที่ทำเสร็จและยังไม่เสร็จใน UI
  showNumberOfDone(todoManager.getNumberOfDone())
  showNumberOfNotDone(todoManager.getNumberOfNotDone())
}

// ส่งออกฟังก์ชันเพื่อให้โมดูลอื่นๆ ใช้งาน
export { addTodoHandler, notDoneButtonHandler }
