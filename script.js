const navItems = document.querySelectorAll('.nav-item');

// Lấy ID mục đã chọn trước đó từ localStorage (nếu có)
const savedId = localStorage.getItem('activeNavId');


if (savedId) {
  const savedItem = document.querySelector(`.nav-item[data-id="${savedId}"]`);
  if (savedItem) savedItem.classList.add('active');
} else {
  // Nếu chưa lưu gì, mặc định chọn mục đầu tiên
  navItems[0].classList.add('active');
}

// Gán sự kiện click cho mỗi mục
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Nếu đang active → bỏ active và xóa localStorage
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      localStorage.removeItem('activeNavId');
    } else {
      // Xóa active từ tất cả
      navItems.forEach(el => el.classList.remove('active'));
      // Gán active mới
      item.classList.add('active');
      localStorage.setItem('activeNavId', item.dataset.id);
    }
  });
});