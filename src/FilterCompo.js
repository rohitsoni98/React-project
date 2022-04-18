import { useEffect, useMemo, useState } from "react";


const FilterCompo = ({ element, id, setItem, list }) => {

	const [tagItem, setTagItem] = useState([]);
	const [tagValue, setTagValue] = useState("");
	const [show, setShow] = useState(false);

	const handleBtnIcon = () => {
		setTagItem((oldItems) => ([...oldItems, tagValue]));
		setTagValue("");
	}



	return (
		<div key={id}>
			<div className="flexBox">
				<div className="leftBox">
					<img src={element.pic} />
				</div>
				<div className="rightBox">
					<h1>{element.firstName}</h1>
					<div className="subItem">
						<p>Email : {element.email}</p>
						<p>Company : {element.company}</p>
						<p>Skill : {element.skill}</p>
						<p>
							Average : {
								element.grades.reduce((acc, grade) => (acc + Number(grade)), 0) / element.grades.length
							}%
						</p>
						{show && <>
							<p>Test1 : <span className="grades">{element.grades[0]}%</span></p>
							<p>Test2 : <span className="grades">{element.grades[1]}%</span></p>
							<p>Test3 : <span className="grades">{element.grades[2]}%</span></p>
							<p>Test4 : <span className="grades">{element.grades[3]}%</span></p>
							<p>Test5 : <span className="grades">{element.grades[4]}%</span></p>
							<p>Test6 : <span className="grades">{element.grades[5]}%</span></p>
							<p>Test7 : <span className="grades">{element.grades[6]}%</span></p>
							<p>Test8 : <span className="grades">{element.grades[7]}%</span></p>
						</>
						}

						{
							tagItem.map((ele, index) => {
								return (
									<p className="tagPara" key={index}>{ele}</p>
								)
							})
						}
						<input
							className="inputTag"
							type="text"
							placeholder="Add a tag"
							value={tagValue}
							onChange={(e) => setTagValue(e.target.value)}
						/>
						<i className="btnIcon" onClick={handleBtnIcon}>
							+
						</i>
					</div>
				</div>
				<div className="btnBox">
					<button onClick={() => setShow(!show)}>{show ? '-' : '+'}</button>
				</div>
			</div>
			<div className="line"></div>
		</div>
	)
}

export default FilterCompo;