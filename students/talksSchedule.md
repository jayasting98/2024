<frontmatter>
title: CS3282 - Lightning Talks
footer:
</frontmatter>
{% from "cs3282-index.md" import projects %}

{% macro print_row(student) %}
<tr>
<td style="width:150px; height:175px">
<img src="{{ baseUrl }}/students/{{ student[1] }}/photo.png" width="150" /><br>
</td>
<td valign="top" style="border: 1px solid black; padding:5px">

****{{ student[0] }}**** <sub>Delivery: `1` `2` `3` `4` `5` | Usefulness: `1` `2` `3` `4` `5`</sub><br>
<md><sub>{{ criteria }} | Comments:</sub></md>
<br>.
<br>.
<br>.
<br>.
<br>.
</td>
</tr>
{% endmacro %}

{% macro print_feedback_table(round) %}

## Round {{ round }}
{{ page_break }}

**Delivery**: `1` very bad | `3` average | `5` very good<br>
**Usefulness to YOU**: `1` not useful at all | `3` >25% of the talk useful | `5` >75% of the talk useful

<table style="width:100%">
{% for project in projects %}
{% for student in project.students %}
{% if round in student %}
{{ print_row(student) }}
{% endif %}
{% endfor %}
{% endfor %}
</table>
<hr>
{{ page_break }}
{% endmacro %}


## Round A (week 3, 4, 5)

{% set criteria%}:far-square: started with PUNCH | :far-square: gave WIIFY | :far-square: gave roadmap | :far-square: key points clear | :far-square: ended with key points and CtA{% endset %}

{{ print_feedback_table('A1') }}
{{ print_feedback_table('A2') }}
{{ print_feedback_table('A3') }}

{{ page_break }}

## Round B (week 7, 8, 9)

{{ print_feedback_table('B1') }}
{{ print_feedback_table('B2') }}
{{ print_feedback_table('B3') }}

{{ page_break }}

## Round C (week 11, 12, 13)

{% set criteria %}:far-square: slides visual-enough | :far-square: no visual clutter | :far-square: key slides stand out | :far-square: _assertion-evidence_ style used (if applicable) | :far-square: no excessive jargons :far-square: meaningful animations | :far-square: demo not too late | :far-square: PUNCH, WIIFY, Roadmap, Key Points, Last Slide etc.{% endset %}

{{ print_feedback_table('C1') }}
{{ print_feedback_table('C2') }}
{{ print_feedback_table('C3') }}
