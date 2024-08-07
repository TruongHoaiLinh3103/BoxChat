import React, { useState } from 'react';
import '../styles/characterlq.scss';
import '../styles/loadinglq.scss';
import { AOV } from '../story/AOV';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const CharacterLQ = () => {
    const [skill, setSkill] = useState({
        img: "",
        name: "",
        delta: ""
    });
    const OneSK = (item) => {
        setSkill({
            img: item.img,
            name: item.name,
            delta: item.delta
        })
    }

    return (
        <div className='CharacterLQ'>
            <h3 className='CharacterLQ-h3'>Arena of Valor</h3>
            <div className='CharacterLQ-Item'>
                {AOV.map((item) => {
                    return(
                        <LazyLoadComponent key={item.id} placeholder={<span className="loaderLQ"></span>} >
                            <div className='CharacterLQ_Char'>
                                <div className='_Char-video'>
                                    <img src={item.poster} alt={item.name}/>
                                </div>
                                <div className='_Char-profile'>
                                    <h3>{item.name}</h3>
                                    <div className='_Char-profile_Skill'>
                                        <div className='_Skill-img' onClick={() => OneSK(item.skill1)}>
                                            <img src={item.skill1.img} alt='skill1'/>
                                        </div>
                                        <div className='_Skill-img' onClick={() => OneSK(item.skill2)}>
                                            <img src={item.skill2.img} alt='skill2'/>
                                        </div>
                                        <div className='_Skill-img' onClick={() => OneSK(item.skill3)}>
                                            <img src={item.skill3.img} alt='skill3'/>
                                        </div>
                                        <div className='_Skill-img' onClick={() => OneSK(item.skill4)}>
                                            <img src={item.skill4.img} alt='skill4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </LazyLoadComponent>
                    )
                })}
            </div>
            <div className='_Char-profile_aler'
                style={{display: skill.name ? "flex" : "none"}}
                onClick={() => setSkill({name: ""})}
            >
                <div className='-profile_aler-box'>
                    <div className='_aler-box-img'>
                        <img src={skill.img} alt={skill.name} />
                    </div>
                    <div className='_aler-box-delta'>
                        <h3>{skill.name}</h3>
                        <p>{skill.delta}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterLQ;