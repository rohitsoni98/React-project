import { useState } from "react";


const FilterCompo = ({ element, id, list, setState }) => {

	const [show, setShow] = useState(false);
	const [tagValue, setTagValue] = useState("")

	const handleBtnIcon = (val) => {
		let newList = list.map(ele => {
			if (ele.id === val.id) {
				return {
					...ele,
					tags: [...ele.tags, tagValue]
				}
			} else {
				return ele;
			}
		})
		setState((preState) => ({ ...preState, list: newList }))
		console.log(newList[0].tags)
		setTagValue("");
	}

	return (
		<div key={id}>
			<div className="flexBox">
				<div className="leftBox">
					<img src={element.pic} alt="logo" />
				</div>
				<div className="rightBox">
					<h1>{element.firstName} {element.lastName}</h1>
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
							element.tags.map((ele, index) => {
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
						<i className="btnIcon" onClick={() => handleBtnIcon(element)}>
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
