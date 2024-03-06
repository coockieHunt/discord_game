import { useState } from "react";
import "./App.css";

function App() {
    const [step, setStep] = useState(1);
    const [curCode, setCurCode] = useState('');
    const [hint, setHint] = useState("<< On peut trouver le bonheur meme dans les moments les plus sombre ... il suffit de se souvenir d'allumer la lumiere. >>");
    const [AddHint, SetAddHint] = useState("✨ LUMOS ✨")
    const [showHit, setShowHit] = useState(false);

    const [AssciError, setAssciError] = useState(false)

    const NextStep = () => {setStep(prevState => prevState + 1)}

    const checkCode = (e) => {
        e.preventDefault();
        let succes = false;

        switch (step) {
            case 1:
              if(curCode == "LDUID" || curCode == "lduid"){
                    setHint('Bien jouer, pour l\'etape suivent aller sur https://pastebin.com/8m9JP8iC')
                    SetAddHint("Un outils qui peut aider https://magictool.ai/tool/binary-to-text/fr/")

                    succes = true;
              }
              break;
            case 2:
                if(curCode == "EXPERT" || curCode == "expert"){
                    setHint('Bien jouer, pour l\'etape final ces ici https://ibb.co/X7j0JBB')
                    SetAddHint("La période associée à la vie d'une général romain ayant créé l'une des méthodes de cryptographie les plus célèbres. Entre 100 av. J.-C. et 44 av. J.-C")
                    
                    succes = true;
                }
            case 3:
                if(curCode == "flagfinal" || curCode == "FLAGFINAL"){
                    setHint('Truc a faire')
                    SetAddHint("Euuuhhh c'est  fini plus indice ici")

                    succes = true;
                }
              break;
            default:
              console.log(`Sorry, we are out of step.`);
        }

        if(succes){
            //clear prev step
            setShowHit(false)
            setCurCode('')
            NextStep()
        }else{
            setCurCode('')
            setAssciError(true);
            setTimeout(() => {
                setAssciError(false);
            }, 2000)
        }
    };

    console.log(' Salut, petit(e) malin(e) ! Rien à voir ici, hein ? La solution est pourtant là, bien en vue sur cette page. Essaye sans fouiller dans les fichiers, tu verras, c\'est plus fun 😊')

    return (
        <>
            <div className="content">
                <pre className="assci">
                    <code className={AssciError ? "error" : ''}>{`
                     CCC       OOO      PPPP      III     N   N     EEEE     RRRR      III     EEEE      SSS            .. 333 
                    c         O   O     P   P      I      NN  N     E        R   R      I      E        S              ..     3
                   c          O   O     PPPP       I      N N N     EEE      RRRR       I      EEE       SSS          ..    33 
                    C         O   O     P          I      N  NN     E        R R        I      E            S          ..     3
                     CCC       OOO      P         III     N   N     EEEE     R  RR     III     EEEE     SSSS            .. 333 

                    `}</code>{step}/4
                </pre>

            {step === 4 ?
                <div className="catch">
                    <h1>Bien jouée truc a faire</h1>
                </div>:
                <div className="catch">
                    <span className="hint">{hint}</span><br/>
                    {showHit ? 
                        <span>{AddHint}</span> : 
                        <span onClick={() => setShowHit(!showHit)} className="hintAdd">VOIR UN INDICE SUPPLÉMENTAIRE</span>
                    }
                </div>
            }
           
           
            <form  onSubmit={checkCode} className={step === 4 ? "lock" : "" }>
                <input
                    type="text"
                    id="codeInput"
                    placeholder="*****"
                    value={curCode}
                    onChange={(e) => setCurCode(e.target.value)}
                />
                <button disabled={step === 4 ? true : false }>ENTER</button>
            </form>
        </div>

        {step == 1 &&
            <span className="i">
                Le bonheur se tapit, discret,
                Dans les petits riens, parfait.
                Un sourire, une brise legere,
                Il se cache, attend sa lumiere.
                Dans chaque detail, l'eclat se cache.
            </span>
        }
        </>
    );
}

export default App;
