
const brightColors = [
    '#FFD700', // Vàng
    '#FF69B4', // Hồng
    '#7FFF00', // Xanh lá
    '#00FFFF', // Xanh dương
    '#FF4500', // Cam
    '#9370DB', // Tím
    // Thêm các màu khác nếu bạn muốn
];

// Hàm xáo trộn danh sách các màu (Fisher-Yates shuffle)
function shuffleColors(colors) {
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]]; // Đổi chỗ 2 phần tử
    }
    return colors;
}

// Lấy tất cả các phần tử interest-block
const interestBlocks = document.querySelectorAll('.interest-block');

// Xáo trộn danh sách màu
shuffleColors(brightColors);

// Áp dụng 5 màu khác nhau cho từng phần tử interest-block
interestBlocks.forEach((block, index) => {
    if (index < 5) {
        block.style.backgroundColor = brightColors[index];
    }
});
