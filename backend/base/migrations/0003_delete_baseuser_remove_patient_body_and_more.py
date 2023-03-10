# Generated by Django 4.1.6 on 2023-02-11 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_baseuser_patient_provider'),
    ]

    operations = [
        migrations.DeleteModel(
            name='BaseUser',
        ),
        migrations.RemoveField(
            model_name='patient',
            name='body',
        ),
        migrations.RemoveField(
            model_name='provider',
            name='body',
        ),
        migrations.AddField(
            model_name='patient',
            name='DOB',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='patient',
            name='alergy',
            field=models.CharField(default='Individual', max_length=128),
        ),
        migrations.AddField(
            model_name='patient',
            name='doctor',
            field=models.CharField(default='Individual', max_length=128),
        ),
        migrations.AddField(
            model_name='patient',
            name='email',
            field=models.CharField(default='Individual', max_length=128),
        ),
        migrations.AddField(
            model_name='patient',
            name='emergency_contact',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='patient',
            name='health_card',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='patient',
            name='history',
            field=models.CharField(default='Individual', max_length=128),
        ),
        migrations.AddField(
            model_name='patient',
            name='phone_number',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='patient',
            name='sex',
            field=models.CharField(default='Individual', max_length=10),
        ),
        migrations.AddField(
            model_name='provider',
            name='book_appointment',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='provider',
            name='location',
            field=models.CharField(default='Individual', max_length=128),
        ),
        migrations.AddField(
            model_name='provider',
            name='open_time',
            field=models.CharField(default='Individual', max_length=128),
        ),
        migrations.AddField(
            model_name='provider',
            name='phone',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='provider',
            name='services',
            field=models.TextField(default='Individual', max_length=1000),
        ),
        migrations.AddField(
            model_name='provider',
            name='url',
            field=models.CharField(default='Individual', max_length=128),
        ),
        migrations.AddField(
            model_name='provider',
            name='video_call',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='provider',
            name='wait_time',
            field=models.IntegerField(default=0),
        ),
    ]
