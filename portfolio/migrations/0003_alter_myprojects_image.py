# Generated by Django 3.2.20 on 2023-07-07 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_alter_myprojects_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myprojects',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
