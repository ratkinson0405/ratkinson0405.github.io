{{ page.name }}
<div>
  <table>
    <colgroup>
      <col width="30%" />
      <col width="70%" />
    </colgroup>
    <thead>
      <tr class="header">
        <th>Training Guide</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {% if page.name == 'index.md' %}
      
      {% for item in site.data.links.links %}
      {% if item.pageid == 'training.md' %}
      <tr>
        <td markdown="span"><a href="{{ item.url }}">{{ item.title }}</a></td>
        <td markdown="span">{{ item.description }}</td>
      </tr>    
      {% endif %}
      {% endif %}
      {% endfor %}
    </tbody>
  </table>
</div>
