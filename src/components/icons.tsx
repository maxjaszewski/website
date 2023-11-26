import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaGithubSquare, FaGithubAlt } from 'react-icons/fa';

const SocialMediaIcons: React.FC = () => {
    const socialMediaPlatforms = [
        { name: 'Github', icon: <FaGithub size={20}/>, link: "https://github.com/maxjaszewski" },
        { name: 'Linkedin', icon: <FaLinkedin size={20}/>, link: "https://www.linkedin.com/in/max-jaszewski-366b4b225"}
    ];

    return (
        <div style={{display: "flex", gap: "5px"}}>
            {socialMediaPlatforms.map((platform) => (
                <div key={platform.name}>
                    <a href={platform.link}>{platform.icon}</a>
                </div>
            ))}
        </div>
    );
};

export default SocialMediaIcons;
