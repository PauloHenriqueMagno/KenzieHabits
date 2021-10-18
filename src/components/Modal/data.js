import * as yup from "yup";

const createHabitData = {
  search: "CreateHabit",
  triggerBtn: "Criar hábito",
  concludeBtn: "Criar hábito",
  title: "Escreva mais sobre seu novo hábito",
  schema: {
    title: yup.string().required(),
    category: yup.string().required(),
    difficulty: yup.string().required(),
    frequency: yup.string().required(),
    how_much_achieved: yup.number().required(),
  },
  label_register: [
    { text: "título", name: "title" },
    { text: "categoria", name: "category" },
    { text: "dificuldade", name: "difficulty" },
    { text: "frequência", name: "frequency" },
    { text: "quanto já foi concluído", name: "how_much_achieved" },
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
    console.log(newData);
  },
};

const updateHabitData = {
  search: "EditUserName",
  triggerBtn: "Editar hábito",
  concludeBtn: "Editar hábito",
  title: "Edite as informações do seu hábito",
  schema: {
    title: yup.string().required(),
    category: yup.string().required(),
    difficulty: yup.string().required(),
    frequency: yup.string().required(),
    how_much_achieved: yup.number().required(),
  },
  label_register: [
    { text: "título", name: "title" },
    { text: "categoria", name: "category" },
    { text: "dificuldade", name: "difficulty" },
    { text: "frequência", name: "frequency" },
    { text: "quanto já foi concluído", name: "how_much_achieved" },
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
    console.log(newData);
  },
};

const updateUserNameData = {
  search: "CreateGroup",
  triggerBtn: "Editar nome de usuário",
  concludeBtn: "Altere aqui seus dados",
  title: "Editar",
  schema: {
    username: yup.string().required(),
    email: yup.string().required(),
  },
  label_register: [
    { text: "Nome de usuário", name: "username" },
    { text: "email", name: "email" },
  ],
  dataCaptor: (data) => {
    const { username, email } = data;
    const newData = {
      username: username,
      email: email,
    };
    console.log(newData);
  },
};

const createGroupData = {
  search: "UpdateGroup",
  triggerBtn: "Criar grupo",
  concludeBtn: "Criar grupo",
  title: "Escreva mais sobre seu novo grupo",
  schema: {
    name: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
  },
  label_register: [
    { text: "título do grupo", name: "name" },
    { text: "categoria", name: "description" },
    { text: "descrição", name: "category" },
  ],
  dataCaptor: (data) => {
    const { name, description, category } = data;
    const newData = {
      name: name,
      description: description,
      category: category,
    };
    console.log(newData);
  },
};

const updateGroupData = {
  search: "UpdateHabit",
  triggerBtn: "Editar grupo",
  concludeBtn: "Editar grupo",
  title: "Edite aqui seu grupo",
  schema: {
    name: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
  },
  label_register: [
    { text: "título do grupo", name: "name" },
    { text: "categoria", name: "description" },
    { text: "descrição", name: "category" },
  ],
  dataCaptor: (data) => {
    const { name, description, category } = data;
    const newData = {
      name: name,
      description: description,
      category: category,
    };
    console.log(newData);
  },
};
const createGoalData = {
  search: "CreateGoal",
  triggerBtn: "Criar objetivo",
  concludeBtn: "Criar objetivo",
  title: "Crie aqui seu objetivo",
  schema: {
    title: yup.string().required(),
    difficulty: yup.string().required(),
    how_much_achieved: yup.number().required(),
  },
  label_register: [
    { text: "título do objetivo", name: "title" },
    { text: "dificuldade", name: "difficulty" },
    { text: "quanto já concluiu", name: "how_much_achieved" },
  ],
  dataCaptor: (data) => {
    const { title, difficulty, how_much_achieved } = data;
    const newData = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: how_much_achieved,
    };
    console.log(newData);
  },
};
const updateGoalData = {
  search: "UpdateGoal",
  triggerBtn: "Editar objetivo",
  concludeBtn: "Editar objetivo",
  title: "Edite aqui seu objetivo",
  schema: {
    title: yup.string().required(),
    difficulty: yup.string().required(),
    how_much_achieved: yup.number().required(),
  },
  label_register: [
    { text: "título do objetivo", name: "title" },
    { text: "dificuldade", name: "difficulty" },
    { text: "quanto já concluiu", name: "how_much_achieved" },
  ],
  dataCaptor: (data) => {
    const { title, difficulty, how_much_achieved } = data;
    const newData = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: how_much_achieved,
    };
    console.log(newData);
  },
};
const createActivityData = {
  search: "CreateActivity",
  triggerBtn: "Criar Atividade",
  concludeBtn: "Criar Atividade",
  title: "Crie sua nova atividade",
  schema: {
    title: yup.string().required(),
    realization_time: yup.string().required(),
    group: yup.number().required(),
  },
  label_register: [
    { text: "título da atividade", name: "title" },
    { text: "", name: "realization_time" },
    { text: "", name: "group" },
  ],
  dataCaptor: (data) => {
    const { title, realization_time, group } = data;
    const newData = {
      title: title,
      realization_time: realization_time,
      group: group,
    };
    console.log(newData);
  },
};
const updateActivityData = {
  search: "UpdateActivity",
  triggerBtn: "Editar atividade",
  concludeBtn: "Editar atividade",
  title: "Crie sua nova atividade",
  schema: {
    title: yup.string().required(),
    difficulty: yup.string().required(),
    how_much_achieved: yup.number().required(),
  },
  label_register: [
    { text: "título da atividade", name: "title" },
    { text: "", name: "realization_time" },
    { text: "", name: "group" },
  ],
  dataCaptor: (data) => {
    const { title, realization_time, group } = data;
    const newData = {
      title: title,
      realization_time: realization_time,
      group: group,
    };
    console.log(newData);
    data = undefined
    console.log(newData);
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
