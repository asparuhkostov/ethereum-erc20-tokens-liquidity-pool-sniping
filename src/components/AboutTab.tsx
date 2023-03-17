import Logo from './Logo.png'

export default () => (
  <div id="about_container">
    <img src={Logo} style={{ width: 300 }} />
    <p className="about_info_p">
      Version <strong>1.1.3</strong>
    </p>
    <p className="about_info_p">Asparuh Kostov</p>
    <p className="about_info_p">2022</p>
  </div>
)
