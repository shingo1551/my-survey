import { Component, h } from '@stencil/core';
import { survey } from '../../shared/data';
import { PreJson } from '../../shared/common';

@Component({
  tag: 'app-survey',
  styleUrl: 'app-survey.css',
  shadow: false,
})
export class AppSurvey {
  render() {
    return <PreJson obj={survey} />;
  }
}
