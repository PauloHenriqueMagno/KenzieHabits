import * as yup from "yup";

const createHabitData = {
  search: "CreateHabit",
  action: "create",
  triggerBtn: "Criar hábito",
  concludeBtn: "Criar hábito",
  title: "Escreva mais sobre seu novo hábito",
  schema: {
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup
      .number("Insira um valor numérico")
      .required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "título", name: "title" },
    { type: "text", text: "categoria", name: "category" },
    { type: "text", text: "dificuldade", name: "difficulty" },
    { type: "text", text: "frequência", name: "frequency" },
    {
      type: "number",
      text: "quanto já foi concluído",
      name: "how_much_achieved",
    },
  ],
  dataCaptor: (data) => {
    const { title, category, difficulty, frequency, how_much_achieved } = data;
    const newData = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      how_much_achieved: how_much_achieved,
    };
    return newData;
  },
};

const updateHabitData = {
  search: "UpdateHabit",
  action: "update",
  triggerBtn: "Editar hábito",
  concludeBtn: "Editar hábito",
  title: "Edite as informações do seu hábito",
  schema: {
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup
      .number("Insira um valor numérico")
      .required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "título", name: "title" },
    { type: "text", text: "categoria", name: "category" },
    { type: "text", text: "dificuldade", name: "difficulty" },
    { type: "text", text: "frequência", name: "frequency" },
    {
      type: "number",
      text: "quanto já foi concluído",
      name: "how_much_achieved",
    },
  ],
  dataCaptor: (data) => {
    const { title, category, difficulty, frequency, how_much_achieved } = data;
    const newData = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      how_much_achieved: how_much_achieved,
    };
    return newData;
  },
};

const updateUserNameData = {
  search: "UpdateUserName",
  action: "update",
  triggerBtn: "Editar informações do perfil",
  concludeBtn: "Editar",
  title: "Altere aqui seus dados",
  schema: {
    username: yup
      .string()
      .required()
      .matches(
        /^[\S]{1,}$/gi,
        "O nome de usuário não deve conter espaço em branco"
      ),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "Nome de usuário", name: "username" },
    { type: "text", text: "email", name: "email" },
  ],
  dataCaptor: (data) => {
    const { username, email } = data;
    const newData = {
      username: username,
      email: email,
    };
    return newData;
  },
};

const createGroupData = {
  search: "CreateGroup",
  action: "create",
  triggerBtn: "Criar grupo",
  concludeBtn: "Criar grupo",
  title: "Escreva mais sobre seu novo grupo",
  schema: {
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "título do grupo", name: "name" },
    { type: "text", text: "categoria", name: "description" },
    { type: "text", text: "descrição", name: "category" },
  ],
  dataCaptor: (data) => {
    const { name, description, category } = data;
    const newData = {
      name: name,
      description: description,
      category: category,
    };
    return newData;
  },
};

const updateGroupData = {
  search: "UpdateGroup",
  action: "update",
  triggerBtn: "Editar grupo",
  concludeBtn: "Editar grupo",
  title: "Edite aqui seu grupo",
  schema: {
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "título do grupo", name: "name" },
    { type: "text", text: "categoria", name: "description" },
    { type: "text", text: "descrição", name: "category" },
  ],
  dataCaptor: (data) => {
    const { name, description, category } = data;
    const newData = {
      name: name,
      description: description,
      category: category,
    };
    return newData;
  },
};
const createGoalData = {
  search: "CreateGoal",
  action: "create",
  triggerBtn: "Criar objetivo",
  concludeBtn: "Criar objetivo",
  title: "Crie aqui seu objetivo",
  schema: {
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup
      .number("Insira um valor numérico")
      .required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "título do objetivo", name: "title" },
    { type: "text", text: "dificuldade", name: "difficulty" },
    { type: "number", text: "quanto já concluiu", name: "how_much_achieved" },
  ],
  dataCaptor: (data) => {
    const { title, difficulty, how_much_achieved } = data;
    const newData = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: how_much_achieved,
    };
    return newData;
  },
};
const updateGoalData = {
  search: "UpdateGoal",
  action: "update",
  triggerBtn: "Editar objetivo",
  concludeBtn: "Editar objetivo",
  title: "Edite aqui seu objetivo",
  schema: {
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup
      .number("Insira um valor numérico")
      .required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "título do objetivo", name: "title" },
    { type: "text", text: "dificuldade", name: "difficulty" },
    { type: "number", text: "quanto já concluiu", name: "how_much_achieved" },
  ],
  dataCaptor: (data) => {
    const { title, difficulty, how_much_achieved } = data;
    const newData = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: how_much_achieved,
    };
    return newData;
  },
};
const createActivityData = {
  search: "CreateActivity",
  action: "create",
  triggerBtn: "Criar Atividade",
  concludeBtn: "Criar Atividade",
  title: "Crie sua nova atividade",
  schema: {
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "título da atividade", name: "title" },
    { type: "datetime-local", text: "", name: "realization_time" },
  ],
  dataCaptor: (data) => {
    const { title, realization_time } = data;
    const newData = {
      title: title,
      realization_time: realization_time,
    };
    return newData;
  },
};
const updateActivityData = {
  search: "UpdateActivity",
  action: "update",
  triggerBtn: "Editar atividade",
  concludeBtn: "Editar atividade",
  title: "Crie sua nova atividade",
  schema: {
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  },
  label_register: [
    { type: "text", text: "título da atividade", name: "title" },
    { type: "datetime-local", text: "", name: "realization_time" },
  ],
  dataCaptor: (data) => {
    const { title, realization_time } = data;
    const newData = {
      title: title,
      realization_time: realization_time,
    };
    return newData;
  },
};

export const allData = [
  createHabitData,
  updateHabitData,
  updateUserNameData,
  createGroupData,
  updateGroupData,
  createGoalData,
  updateGoalData,
  createActivityData,
  updateActivityData,
];
