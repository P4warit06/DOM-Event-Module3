// **1. ฟังก์ชัน showTodoItem(newId, newDescription)**:
// ใช้สร้างและแสดง Todo ใหม่ในหน้าจอ
function showTodoItem(newId, newDescription) {
  const listTodo = document.getElementById('listTodo') // เข้าถึง div ที่มี id เป็น 'listTodo'
  const todoItem = document.createElement('div') // สร้าง div สำหรับ Todo
  todoItem.setAttribute('class', 'todoItem') // เพิ่ม class 'todoItem' เพื่อใช้สำหรับ styling
  todoItem.setAttribute('id', newId) // ตั้ง id ของ div นี้ให้ตรงกับ ID ของ Todo ใหม่

  const desc = document.createElement('p') // สร้าง <p> สำหรับแสดงรายละเอียด Todo
  desc.textContent = newDescription // ใส่ข้อความ (รายละเอียด Todo) ลงใน <p>

  const buttNotDone = document.createElement('button') // สร้างปุ่มสำหรับกำหนดสถานะ "Not Done"
  buttNotDone.textContent = 'Not done' // ใส่ข้อความในปุ่ม

  const buttRemove = document.createElement('button') // สร้างปุ่มสำหรับลบ Todo
  buttRemove.textContent = 'Remove' // ใส่ข้อความในปุ่ม

  listTodo.appendChild(todoItem) // เพิ่ม div (Todo item) เข้าไปใน div 'listTodo'
  todoItem.appendChild(desc) // เพิ่ม <p> (รายละเอียด Todo) เข้าไปใน Todo item
  todoItem.appendChild(buttNotDone) // เพิ่มปุ่ม "Not Done" เข้าไปใน Todo item
  todoItem.appendChild(buttRemove) // เพิ่มปุ่ม "Remove" เข้าไปใน Todo item
}

// **2. ฟังก์ชัน showNumberOfDone(numberOfDone)**:
// ใช้แสดงจำนวน Todo ที่ทำเสร็จแล้ว
function showNumberOfDone(numberOfDone) {
  const parent = document.getElementById('summaryTodo') // เข้าถึง div ที่มี id เป็น 'summaryTodo'
  const ref = document.getElementById('done') // เข้าถึง <p> ที่มี id เป็น 'done'
  const number = document.createElement('p') // สร้าง <p> ใหม่เพื่ออัปเดตจำนวน
  number.setAttribute('id', 'done') // ตั้ง id ของ <p> เป็น 'done'
  number.textContent = `Number of Done: ${numberOfDone}` // ใส่ข้อความจำนวน Todo ที่ทำเสร็จ
  parent.replaceChild(number, ref) // แทนที่ <p> เดิมด้วย <p> ใหม่
}

// **3. ฟังก์ชัน showNumberOfNotDone(numberOfNotDone)**:
// ใช้แสดงจำนวน Todo ที่ยังไม่เสร็จ
function showNumberOfNotDone(numberOfNotDone) {
  const parent = document.getElementById('summaryTodo') // เข้าถึง div ที่มี id เป็น 'summaryTodo'
  const ref = document.getElementById('notDone') // เข้าถึง <p> ที่มี id เป็น 'notDone'
  const number = document.createElement('p') // สร้าง <p> ใหม่เพื่ออัปเดตจำนวน
  number.setAttribute('id', 'notDone') // ตั้ง id ของ <p> เป็น 'notDone'
  number.textContent = `Number of Not Done: ${numberOfNotDone}` // ใส่ข้อความจำนวน Todo ที่ยังไม่เสร็จ
  parent.replaceChild(number, ref) // แทนที่ <p> เดิมด้วย <p> ใหม่
}

// **4. ฟังก์ชัน removeTodoItem(removeId)**:
// ใช้ลบ Todo ออกจากหน้าจอ
function removeTodoItem(removeId) {
  const parentNode = document.getElementById('listTodo') // เข้าถึง div ที่มี id เป็น 'listTodo'
  const remove = document.getElementById(removeId) // เข้าถึง Todo item ที่ต้องการลบ (ค้นหาโดย id)
  parentNode.removeChild(remove) // ลบ Todo item ออกจาก 'listTodo'
}

// **5. การ export ฟังก์ชัน**:
// ทำให้ฟังก์ชันทั้งหมดนี้สามารถนำไปใช้งานในไฟล์อื่นได้
export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
