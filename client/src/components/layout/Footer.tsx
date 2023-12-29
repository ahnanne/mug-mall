const Footer = () => {
  const handleFakeButton = () => {
    window.alert('데모 사이트입니다.');
  };

  return (
    <footer>
      <div>
        <div>
          <i className="icon"></i>
          <span>Mug Mall</span>
        </div>
      </div>
      <div>
        <small>
          주식회사 머그몰
          <br />
          사업자등록번호 this-is-demo 제1234-FAKE-00000호
          <br />
          가상시 가상구 가상동 123
        </small>
      </div>
      <div>
        <address>
          <a href="mailto:yein.ahn9@gmail.com">yein.ahn9@gmail.com</a>
        </address>
        <div className="flex policies">
          <button type="button" onClick={handleFakeButton}>
            이용약관
          </button>
          <button type="button" onClick={handleFakeButton}>
            개인정보처리방침
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
