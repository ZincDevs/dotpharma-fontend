/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import _ from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import key from 'uniqid';
import {
  cardiology_b,
  stomatology_b,
  radiology_b,
  internal_medecine_b,
  ophthalmology_b,

  cardiology_info,
  stomatology_info,
  radiology_info,
  internal_medecine_info,
  ophthalmology_info,
} from '../../../../../assets/index';

function HClinics({ clinics_categories }) {
  const [activeaCat, setActiveCat] = useState(clinics_categories[0]);
  const handleChangeActive = obj => {
    setActiveCat(obj);
  };

  return (
    <div className="col-12 j-x-i-left mt-4 f-x-i-clinix">
      <div className="j-x-i-header py-2 px-3 d-flex">
        <div className="flex-grow-1"><span>Hospitals And clinics</span></div>
        <div className="search-btn"><span label="search"><i className="bi bi-search" /></span></div>
      </div>
      <div className="d-flex flex-wrap f-x-i-clinix-cat">
        <div className="p-3 d-flex flex-wrap w-100">
          {_.map(clinics_categories, item => (
            <div
              key={key()}
              className={`c-category-item d-flex flex-column justify-content-center align-items-center py-3 ${(item.name === activeaCat.name) && 'active'}`}
              onClick={() => handleChangeActive(item)}
            >
              <div><img src={item.icon} alt="icon" /></div>
              <div className="py-2"><span>{item.name}</span></div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-wrap f-x-i-clinix-cat-info py-5">
        <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
          <img src={activeaCat?.info.image} alt={activeaCat?.name} />
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column px-3">
            <h2 className="py-2">{activeaCat?.name}</h2>
            <p>{activeaCat?.info?.description}</p>
            <div className="py-3">
              <Link to={`/clinics?category=${activeaCat?.name}`} className="py-2 px-3">View Clinics</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="j-x-i-header py-2 px-3 text-center">
        <div><Link to="/clinics">View all</Link></div>
      </div>
    </div>
  );
}

HClinics.defaultProps = {
  clinics_categories: [
    {
      icon: cardiology_b,
      name: 'Cardiology',
      info: {
        description: 'Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine. A cardiologist is not the same as a cardiac surgeon.',
        image: cardiology_info,
      },
    },
    {
      icon: stomatology_b,
      name: 'Stomatology',
      info: {
        description: 'stomatology is a general term which includes dentistry as a health care practice. Dentistry includes restorative (crowns, bridges) treatments, orthodontic (braces), prosthetic (dentures), endodontic (root canal), periodontal (gum) therapies and also exodontic (removing teeth) process.',
        image: stomatology_info,
      },
    },
    {
      icon: radiology_b,
      name: 'Radiology',
      info: {
        description: 'Radiologists are medical doctors that specialize in diagnosing and treating injuries and diseases using medical imaging (radiology) procedures (exams/tests) such as X-rays, computed tomography (CT), magnetic resonance imaging (MRI), nuclear medicine, positron emission tomography (PET) and ultrasound.',
        image: radiology_info,
      },
    },
    {
      icon: internal_medecine_b,
      name: 'Internal Medicine',
      info: {
        description: 'Internal medicine or general internal medicine (in Commonwealth nations) is the medical specialty dealing with the prevention, diagnosis, and treatment of internal diseases. Physicians specializing in internal medicine are called internists, or physicians (without a modifier) in Commonwealth nations. Internists are skilled in the management of patients who have undifferentiated or multi-system disease processes.',
        image: internal_medecine_info,
      },
    },
    {
      icon: ophthalmology_b,
      name: 'Ophthalmology',
      info: {
        description: 'Ophthalmology is the study of medical conditions relating to the eye. Ophthalmologists are doctors who specialize in the medical and surgical treatment of this organ.',
        image: ophthalmology_info,
      },
    },
  ],
};

export default HClinics;
