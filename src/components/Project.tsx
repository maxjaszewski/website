import styled from "styled-components";

const ProjectWrapper = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
`;

export default function Project({
  title,
  description,
  link,
  source,
  image,
}: {
  title: string;
  description: string;
  link?: string;
  source?: string;
  image?: string;
}) {
  return (
    <ProjectWrapper>
      {image ? (
        <div style={{ flex: 15 }}>
          <img style={{ maxWidth: "100%" }} src={image} alt={title} />
        </div>
      ) : null}
      <div style={{ flex: 5 }}></div>
      <div style={{ flex: 80 }}>
        <h3>
          { link ? (
            <a href={link}>{title}</a>
          ) : <p>{title}</p> }
        </h3>
        <p>{description}</p>
        {source ? (
          <p style={{ fontWeight: "bold" }}>
            Code: <a href={source}>{source}</a>
          </p>
        ) : null}
      </div>
    </ProjectWrapper>
  );
}


