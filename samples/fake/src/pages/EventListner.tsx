// 이벤트를 등록했습니다.
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const { isTrusted, target, bubbles } = e;
  console.log('mouse click occurs.', isTrusted, target, bubbles);
});

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const { isTrusted, target, bubbles } = e;
  console.log('mouse click also occurs.', isTrusted, target, bubbles);
});
export default function EventListner() {
  return <div>EventListner</div>;
}
