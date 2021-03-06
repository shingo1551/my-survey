export const survey = {
  title: 'Survey Title',
  questions: [
    {
      type: 'fa',
      required: false,
      html: 'question text 1',
      placeholder: 'placeholder',
    },
    {
      type: 'fa',
      required: true,
      html: 'question text 2',
      placeholder: 'placeholder',
    },
    {
      type: 'sa',
      required: false,
      html: 'question text 3',
      selections: [
        {
          html: 'selection 1',
        },
        {
          html: 'selection 2',
        },
        {
          html: 'selection 3',
        },
        {
          html: 'selection 4',
        },
        {
          html: 'selection 5',
          fa: true,
        },
      ],
    },
    {
      type: 'sa',
      required: true,
      html: 'question text 4',
      selections: [
        {
          html: 'selection 1',
        },
        {
          html: 'selection 2',
        },
        {
          html: 'selection 3',
        },
        {
          html: 'selection 4',
        },
        {
          html: 'selection 5',
          fa: true,
        },
      ],
    },
    {
      type: 'ma',
      min: 0,
      html: 'question text 5',
      selections: [
        {
          html: 'selection 1',
        },
        {
          html: 'selection 2',
        },
        {
          html: 'selection 3',
        },
        {
          html: 'selection 4',
        },
        {
          html: 'selection 5',
          fa: true,
        },
      ],
    },
    {
      type: 'ma',
      min: 2,
      html: 'question text 6',
      selections: [
        {
          html: 'selection 1',
        },
        {
          html: 'selection 2',
        },
        {
          html: 'selection 3',
        },
        {
          html: 'selection 4',
        },
        {
          html: 'selection 5',
          fa: true,
        },
      ],
    },
  ],
};
