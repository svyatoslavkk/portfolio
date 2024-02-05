import { socials } from "../../constants/constants";

export default function ConnectWithMe() {
  return (
    <section className="default-section">
      <h2 className="title">Connect With Me</h2>
      <div className="flex-wrap-list">
        {socials.map((el) => (
          <div className="tech-item">
            <img src={el.icon} className="tiny-icon-image" alt={el.name} />
            <span className="pre-title" style={{color: el.textColor}}>{el.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}