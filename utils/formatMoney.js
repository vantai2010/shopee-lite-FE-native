export default handleFormatMoney = (amount) => {
    // Sử dụng Intl.NumberFormat với locale 'vi-VN' để định dạng số tiền
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}
