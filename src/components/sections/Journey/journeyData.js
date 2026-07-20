import {
    DoorOpen,
    BookOpen,
    Code2,
    Users,
    FolderKanban,
} from "lucide-react";

export const journeySteps = [
    {
        id: "01",
        icon: DoorOpen,
        title: "Entre na DevClub",
        description:
            "Tenha acesso à plataforma, comunidade, mentorias e ao plano completo da sua evolução.",
    },

    {
        id: "02",
        icon: BookOpen,
        title: "Aprenda os fundamentos",
        description:
            "Domine HTML, CSS, JavaScript, Git e lógica de programação construindo projetos desde o primeiro dia.",
    },

    {
        id: "03",
        icon: Code2,
        title: "Construa projetos reais",
        description:
            "Desenvolva aplicações modernas para criar um portfólio que demonstra suas habilidades na prática.",
    },

    {
        id: "04",
        icon: Users,
        title: "Receba feedback",
        description:
            "Conte com mentorias, desafios e uma comunidade ativa para acelerar sua evolução.",
    },

    {
        id: "05",
        icon: FolderKanban,
        title: "Monte seu portfólio",
        description:
            "Organize seus melhores projetos e esteja preparado para impressionar recrutadores e empresas.",
    },
];