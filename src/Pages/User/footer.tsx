import React from 'react';
import '../../assets/css/footer.css';
import 'https://kit.fontawesome.com/b8ffcf0824.js';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section store-locations">
          <h2>Hệ Thống Cửa Hàng</h2>
          <ul>
            <li><strong>Chi Nhánh Hồ Chí Minh</strong></li>
            <li>TP. Thủ Đức - Quận 9 - Tầng 2 TTTM Vincom Mega Mall Vinhomes Grand Park.</li>
            <li>Quận 1 - 160 Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh.</li>
            <li>Quận 10 - 561 Sư Vạn Hạnh, Phường 13.</li>
            <li>Quận 1 - The New Playground 26 Lý Tự Trọng, Phường Bến Nghé.</li>
            <li>Quận Gò Vấp - 326 Quang Trung, Phường 10.</li>
            <li><strong>TP. Biên Hòa</strong> - 151A Phan Trung, Phường Tân Mai.</li>
            <li><strong>Chi Nhánh Bình Dương</strong></li>
            <li>TP. Thủ Dầu Một - 28 Yersin, Phường Hiệp Thành.</li>
            <li><strong>Chi Nhánh Cần Thơ</strong></li>
            <li>Quận Ninh Kiều - 52 Mậu Thân, Phường An Phú.</li>
            <li><strong>Đồng Đa</strong> - 49-51 Hồ Đắc Di, Phường Nam Đồng.</li>
            <li><strong>Chi Nhánh Hưng Yên</strong></li>
            <li>Văn Giang - PT.TV 136 - Mega Grand World - Ocean Park</li>
            <li><strong>Chi Nhánh Hải Phòng</strong></li>
            <li>Lê Chân - Tầng 2 TTTM Aeon Mall Hải Phòng Lê Chân 65 Võ Nguyên Giáp, Phường Kênh Dương</li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h2>Mạng Xã Hội</h2>
          <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
          <a href="#"><i className="fab fa-youtube"></i> YouTube</a>
          <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
        </div>
        <div className="footer-section policies">
          <h2>Chính Sách</h2>
          <ul>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Chính sách Thẻ Thành viên</a></li>
            <li><a href="#">Chính sách Bảo hành & Đổi trả</a></li>
            <li><a href="#">Chính sách giao hàng hoả tốc</a></li>
          </ul>
        </div>
        <div className="footer-section fanpage">
          <h2>Fanpage</h2>
          <a href="https://www.facebook.com/DirtyCoins">
            <img src="https://bizweb.dktcdn.net/100/369/010/themes/914385/assets/logo.png?1719800579188" alt="Dirty Coins" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>0933 800 190 - 1900252557</p>
        <p><a href="mailto:cs@teamdcs@gmail.com">cs@teamdcs@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
