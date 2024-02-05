import { socials } from "../../constants/constants";

export default function ConnectWithMe() {
  return (
    <section className="default-section">
      <h2 className="title">Connect With Me</h2>
      <div className="flex-wrap-list" style={{ justifyContent: 'center'}}>
        {socials.map((el) => (
          <div className="tech-item">
            <img src={el.icon} className="big-circle-icon-image" alt={el.name} />
            <span className="social-name" style={{color: el.textColor}}>{el.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}