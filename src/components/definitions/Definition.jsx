import './Definition.css';

const Definition = ({ word, meanings, category }) => {
  return (
    <div className='meanings'>
      {word === "" ? 
        (<span className='sub-title'>Enter a word in search</span>) : 
        (
            meanings.map((meaning) => (
                meaning.meanings.map((item) => (
                    item.definitions.map((def) => (
                        <div className="unique-meaning" style={{backgroundColor: '#fff', color: '#000'}}>
                            <b>{def.definition}</b>
                            <hr style={{backgroundColor: '#000', width: '100%'}}/>
                            {def.example && (
                                <span>
                                    <b>Example: </b>
                                    {def.example}
                                </span>
                            )}
                            {item.synonyms && (
                                <span>
                                    <b>Synonyms :</b> {item.synonyms.map((s) => `${s}, `)}
                                </span>
                            )}
                        </div>
                    ))
                ))
            ))
        )
      }
    </div>
  )
};

export default Definition;
