export function Footer() {
  console.log({ sonartoken: 'sonar.token=ee9cad4177406bb7ce1ef567d5aca29edf6b86ef'})
  return (
    <footer>
      <div className='container'>
        <a href='/#/' className='logo-font'>
          conduit
        </a>
        <span className='attribution'>
          An interactive learning project from <a href='https://thinkster.io'>Thinkster</a>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
  );
}
