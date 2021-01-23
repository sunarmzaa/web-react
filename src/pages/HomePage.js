import WordCard from '../components/WordCard'
import { Button, Row, Col, Input, Select } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';

const StyledWrapper = styled.div`
  padding: 20px 10%;
  @media(max-width: 425px) {
    padding: 20px 10px;
    
  }
  .select-types {
    width: 100%;
  }
  .form-item {
    margin-bottom: 10px;
  }
`;

const typeOptions = [
  { label: 'noun', value: 'noun' },
  { label: 'verb', value: 'verb' },
  { label: 'adjective', value: 'adjective' },
  { label: 'adverb', value: 'adverb' },
  { label: 'preposition', value: 'preposition' },
  { label: 'conjunction', value: 'conjunction' }
]

function HomePage() {

  const vocabs = [{ "meanings": ["มาพร้อมกับ"], "word": "Accompany", "createdAt": "2020-11-15T11:56:52.792Z", "types": ["verb"] }, { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" }, { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }]

  const [dataList, setDataList] = useState(vocabs);

  const [word, setWord] = useState('');
  const [types, setTypes] = useState([]);
  const [meanings, setMeanings] = useState('');

  const handleClick = () => {
    setDataList([...dataList, {
      word,
      types,
      meanings: meanings.split(",").map((item) => item.trim())
    }])
  }

  const handleDelete = (index) => {
    const newArr = dataList.filter((data, id) => {
      return id !== index
    });
    setDataList(newArr);
  }

  return (
    <StyledWrapper>
      <h1>My vocabularies</h1>

      <div>

        <div className='form-item'>
          <div>
            <label htmlFor='word-input'>Word</label>
          </div>
          <Input
            id='word-input'
            placeholder="English word"
            onChange={(e) => { setWord(e.target.value) }}
            value={word}
          />
        </div>

        <div className='form-item'>
          <div>
            <label htmlFor='select-types'>Types</label>
          </div>
          <Select
            className='select-types'
            id='select-types'
            options={typeOptions}
            mode="multiple"
            placeholder="Select types"
            onChange={(values) => { setTypes(values) }}
            value={types}
          />
        </div>

        <div className='form-item'>
          <div>
            <label htmlFor='meaning-input'>Meanings</label>
          </div>
          <Input
            id='meaning-input'
            placeholder="Meanings"
            onChange={(e) => { setMeanings(e.target.value) }}
            value={meanings}
          />
        </div>


      </div>

      <Button className='form-item' type='primary' onClick={handleClick}>Add vocab</Button>

      <Row gutter={[16, 24]}>
        {dataList.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={12} md={8} lg={6} >
              <WordCard  {...item} onDelete={() => { handleDelete(index) }} />
            </Col>
          )
        })}
      </Row>
    </StyledWrapper>
  );


}

export default HomePage;