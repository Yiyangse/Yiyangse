export default function Icon() {
  return (
    <div>
      <h3>Icon</h3>
      {/* 폰트의 컬러와 사이즈  */}
      <span className='material-icons' style={{ color: 'blue' }}>
        Home
      </span>
      <span className='material-icons' style={{ fontSize: '50px' }}>
        check_circle_outline
      </span>
    </div>
  );
}
