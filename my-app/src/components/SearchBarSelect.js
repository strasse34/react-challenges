import React, { Component } from "react";
import EducationalMaterial from "./EducationalMaterial";

class SearchBarSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: EducationalMaterial,
      class: "",
      subject: "",
      chapter: "",
    };
  }

  handleChangeSelect = (optionName, event) => {
    const selectedOption = event.target.value;
    this.setState(
      {
        [optionName]: selectedOption,
      },
      () => {
        this.filterMaterialsByOptions();
      }
    );
  };

  filterMaterialsByOptions = () => {
    const { class: selectedClass, subject: selectedSubject, chapter: selectedChapter } = this.state;
    let filteredMaterials = EducationalMaterial;

    if (selectedClass) {
      filteredMaterials = filteredMaterials.filter((material) =>
        material.class.toLowerCase().includes(selectedClass.toLowerCase())
      );
    }

    if (selectedSubject) {
      filteredMaterials = filteredMaterials.filter((material) =>
        material.subject.toLowerCase().includes(selectedSubject.toLowerCase())
      );
    }

    if (selectedChapter) {
      filteredMaterials = filteredMaterials.filter((material) =>
        material.chapter.toLowerCase().includes(selectedChapter.toLowerCase())
      );
    }

    this.setState({
      materials: filteredMaterials,
    });
  };

  render() {
    return (
      <div>
        <h1>Filter materials:</h1>
        <p>Matching Materials Found: {this.state.materials.length}</p>
        <select
          id="class"
          value={this.state.class}
          onChange={(e) => this.handleChangeSelect("class", e)}
        >
          <option value="">Select Class</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
        <select
          id="subject"
          value={this.state.subject}
          onChange={(e) => this.handleChangeSelect("subject", e)}
        >
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="History">History</option>
          <option value="Literature">Literature</option>
          <option value="Geography">Geography</option>
          <option value="Physics">Physics</option>
        </select>
        <select
          id="chapter"
          value={this.state.chapter}
          onChange={(e) => this.handleChangeSelect("chapter", e)}
        >
          <option value="">Select Chapter</option>
          <option value="Chapter 1">Chapter 1</option>
          <option value="Chapter 2">Chapter 2</option>
          <option value="Chapter 3">Chapter 3</option>
          <option value="Chapter 4">Chapter 4</option>
          <option value="Chapter 5">Chapter 5</option>
          <option value="Chapter 6">Chapter 6</option>
          <option value="Chapter 7">Chapter 7</option>
          <option value="Chapter 8">Chapter 8</option>
          <option value="Chapter 9">Chapter 9</option>
          <option value="Chapter 10">Chapter 10</option>
        </select>
        <div>
          {this.state.materials.map((material, index) => (
            <p key={index}>
              Class: {material.class}, Subject: {material.subject}, Chapter: {material.chapter}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBarSelect;
