import axios from 'axios';

export default async function calculateDistance(address1, address2) {
    // Hàm tính khoảng cách giữa hai tọa độ bằng haversine formula
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const earthRadius = 6371; // Bán kính Trái Đất (đơn vị: km)

        const degToRad = deg => (deg * Math.PI) / 180;
        const dLat = degToRad(lat2 - lat1);
        const dLon = degToRad(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = earthRadius * c;
        return distance;
    }

    try {
        // Lấy thông tin địa chỉ 1
        const response1 = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address1)}`);
        const data1 = response1.data[0];
        const lat1 = parseFloat(data1.lat);
        const lon1 = parseFloat(data1.lon);

        // Lấy thông tin địa chỉ 2
        const response2 = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address2)}`);
        const data2 = response2.data[0];
        const lat2 = parseFloat(data2.lat);
        const lon2 = parseFloat(data2.lon);
        console.log("ket quả", response1, "2", response2);
        // Tính khoảng cách giữa hai tọa độ
        const distance = calculateDistance(lat1, lon1, lat2, lon2);
        console.log(`Khoảng cách giữa hai địa điểm là: ${distance} km`);
        return distance;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
