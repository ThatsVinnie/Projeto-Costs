import Input from '../form/Input'
import Select from '../form/Select'
import SubmitBtn from '../form/SubmitBtn'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name"
                placeholder="insira o nome do projeto"
            />
            <Input 
                type="number" 
                text="Orçamento do projeto" 
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select 
                text="Selecione a categoria" 
                name="category_id"
            />
            <SubmitBtn text={btnText}></SubmitBtn>
        </form>
    )
}

export default ProjectForm