import iconData from '../../data/IconData';

const FooterIcons = () => {
  return (
    <ul className='icons'>
      {iconData.map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            rel='noreferrer'
            target='_blank'
            aria-label={item.label}
          >
            <item.icon size={25} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterIcons;
