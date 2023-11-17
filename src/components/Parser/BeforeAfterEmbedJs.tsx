import "./BeforeAfter.css"
export default function BeforeAfter({ file }: { file: string }) {
  return (
    <div >
      <div style={{ width: "50%" }} className="displays">
        <h4>Input</h4>
        <embed style={{ width: "80%" }} src={`/website/assets/js/${file}.js`}></embed>
      </div>
      <div style={{ width: "50%" }} className="displays">
        <h4>Input</h4>
        <embed style={{ width: "80%" }} src={`/website/assets/js/${file}after.js`}></embed>
      </div>
    </div>
  );
}
