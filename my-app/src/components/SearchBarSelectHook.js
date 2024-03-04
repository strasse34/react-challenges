import React, { useState } from "react";
import EducationalMaterial from "./EducationalMaterial";

const SearchBarSelectHook = () => {
  const [materials, setMaterials] = useState(EducationalMaterial);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  const handleChangeSelect = (optionName, event) => {
    const selectedOption = event.target.value;
    switch (optionName) {
      case "class":
        setSelectedClass(selectedOption);
        break;
      case "subject":
        setSelectedSubject(selectedOption);
        break;
      case "chapter":
        setSelectedChapter(selectedOption);
        break;
      default:
        break;
    }
  };

  const filterMaterialsByOptions = () => {
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

    setMaterials(filteredMaterials);
  };

  return (
    <div>
      <h1>Filter materials:</h1>
      <p>Matching Materials Found: {materials.length}</p>
      <select
        id="class"
        value={selectedClass}
        onChange={(e) => handleChangeSelect("class", e)}
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
        value={selectedSubject}
        onChange={(e) => handleChangeSelect("subject", e)}
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
        value={selectedChapter}
        onChange={(e) => handleChangeSelect("chapter", e)}
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
        {materials.map((material, index) => (
          <p key={index}>
            Class: {material.class}, Subject: {material.subject}, Chapter: {material.chapter}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchBarSelectHook;
