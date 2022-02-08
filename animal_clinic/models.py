from django.db import models


class CustomerModels(models.Model):
    first_name = models.CharField(max_length=255, null=False, blank=False)
    last_name = models.CharField(max_length=255, null=False, blank=False)
    email = models.CharField(max_length=255, null=True, blank=True)
    contactInformation = models.CharField(max_length=255, null=True, blank=True)
    phoneNumber = models.CharField(max_length=255, null=False, blank=False)

    class Meta:
        unique_together = ('first_name', 'last_name',)


class AnimalModels(models.Model):
    customer = models.ForeignKey(CustomerModels, on_delete=models.CASCADE, null=False, blank=False)
    name = models.CharField(max_length=255, null=False, blank=False)
    species = models.CharField(max_length=255, null=True, blank=True)
    genus = models.CharField(max_length=255, null=True, blank=True)
    age = models.CharField(max_length=10, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)

    class Meta:
        unique_together = ('name', 'species', 'genus', 'age',)
